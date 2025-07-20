<template>
  <div class="bouncing-icons-overlay">
    <img
      v-for="icon in activeIcons"
      :key="icon.id"
      :src="icon.src"
      :alt="icon.id"
      class="bouncing-icon"
      :style="{
        left: icon.x + 'px',
        top: icon.y + 'px',
        width: icon.size + 'px',
        height: icon.size + 'px',
        zIndex: '1',
        cursor: 'pointer',
        transition: icon.isHovering ? 'box-shadow 0.2s' : 'none',
        boxShadow: icon.isHovering ? '0 0 24px 8px #ffd70088' : 'none'
      }"
      @mouseenter="onIconHover(icon)"
      @mouseleave="onIconLeave(icon)"
    />
  </div>
</template>

<script>
export default {
  name: "RandomIconBounce",
  props: {
    icons: { type: Array, required: true },
    count: { type: Number, default: 5 },
    area: { type: Object, required: true }, // { width, height }
    minSize: { type: Number, default: 64 },
    maxSize: { type: Number, default: 96 },
    speed: { type: Number, default: 1.5 },
    localBoxSize: { type: Number, default: 120 },
    elasticity: { type: Number, default: 0.85 },
    hoverBounce: { type: Number, default: 2.5 },
  },
  data() {
    return {
      activeIcons: [],
      animationFrame: null,
    };
  },
  mounted() {
    this.initIcons();
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationFrame);
  },
  watch: {
    area: {
      handler() {
        this.initIcons();
      },
      deep: true,
    },
    icons: {
      handler() {
        this.initIcons();
      },
      deep: true,
    }
  },
  methods: {
    initIcons() {
      if (!this.area || !this.area.width || !this.area.height) {
        this.activeIcons = [];
        return;
      }
      const shuffled = [...this.icons].sort(() => Math.random() - 0.5);
      this.activeIcons = shuffled.slice(0, this.count).map((icon) => {
        const size = this.minSize + Math.random() * (this.maxSize - this.minSize);
        const boxSize = Math.max(this.localBoxSize, size);
        const minOriginX = boxSize / 2;
        const maxOriginX = this.area.width - boxSize / 2;
        const minOriginY = boxSize / 2;
        const maxOriginY = this.area.height - boxSize / 2;
        const originX = minOriginX + Math.random() * (maxOriginX - minOriginX);
        const originY = minOriginY + Math.random() * (maxOriginY - minOriginY);
        const minX = originX - boxSize / 2;
        const maxX = originX + boxSize / 2 - size;
        const minY = originY - boxSize / 2;
        const maxY = originY + boxSize / 2 - size;
        const x = minX + Math.random() * (maxX - minX);
        const y = minY + Math.random() * (maxY - minY);
        return {
          ...icon,
          size,
          originX,
          originY,
          boxSize,
          x,
          y,
          dx: (Math.random() - 0.5) * this.speed * 1.5,
          dy: (Math.random() - 0.5) * this.speed * 1.5,
          isHovering: false,
        };
      });
    },
    animate() {
      let icons = this.activeIcons.map(icon => {
        let { x, y, dx, dy, size, originX, originY, boxSize } = icon;
        const halfBox = boxSize / 2;
        const minX = originX - halfBox;
        const maxX = originX + halfBox - size;
        const minY = originY - halfBox;
        const maxY = originY + halfBox - size;

        x += dx;
        y += dy;

        // Elastic bounce off local box walls
        if (x < minX) {
          x = minX;
          dx = -dx * this.elasticity;
        } else if (x > maxX) {
          x = maxX;
          dx = -dx * this.elasticity;
        }
        if (y < minY) {
          y = minY;
          dy = -dy * this.elasticity;
        } else if (y > maxY) {
          y = maxY;
          dy = -dy * this.elasticity;
        }

        // Add a little random jitter
        dx += (Math.random() - 0.5) * 0.1;
        dy += (Math.random() - 0.5) * 0.1;
        // Clamp speed
        const maxSpeed = this.speed * 2.5;
        dx = Math.max(-maxSpeed, Math.min(maxSpeed, dx));
        dy = Math.max(-maxSpeed, Math.min(maxSpeed, dy));
        // Friction
        dx *= 0.995;
        dy *= 0.995;
        return { ...icon, x, y, dx, dy };
      });

      // Elastic icon-to-icon collisions
      for (let i = 0; i < icons.length; i++) {
        for (let j = i + 1; j < icons.length; j++) {
          const a = icons[i];
          const b = icons[j];
          if (this.isColliding(a, b)) {
            this.resolveElasticCollision(a, b, this.elasticity);
          }
        }
      }

      this.activeIcons = icons;
      this.animationFrame = requestAnimationFrame(this.animate);
    },
    isColliding(a, b) {
      const ax = a.x + a.size / 2;
      const ay = a.y + a.size / 2;
      const bx = b.x + b.size / 2;
      const by = b.y + b.size / 2;
      const rA = a.size / 2;
      const rB = b.size / 2;
      const distSq = (ax - bx) * (ax - bx) + (ay - by) * (ay - by);
      const minDist = rA + rB;
      return distSq < minDist * minDist;
    },
    resolveElasticCollision(a, b, elasticity) {
      const ax = a.x + a.size / 2;
      const ay = a.y + a.size / 2;
      const bx = b.x + b.size / 2;
      const by = b.y + b.size / 2;
      let dx = bx - ax;
      let dy = by - ay;
      let dist = Math.sqrt(dx * dx + dy * dy) || 1e-6;
      const overlap = (a.size / 2 + b.size / 2) - dist;
      if (overlap > 0) {
        const pushX = (dx / dist) * (overlap / 2);
        const pushY = (dy / dist) * (overlap / 2);
        a.x -= pushX;
        a.y -= pushY;
        b.x += pushX;
        b.y += pushY;
      }
      dx = bx - ax;
      dy = by - ay;
      dist = Math.sqrt(dx * dx + dy * dy) || 1e-6;
      const nx = dx / dist;
      const ny = dy / dist;
      const aVelNorm = a.dx * nx + a.dy * ny;
      const bVelNorm = b.dx * nx + b.dy * ny;
      const aVelTang = -a.dx * ny + a.dy * nx;
      const bVelTang = -b.dx * ny + b.dy * nx;
      a.dx = (bVelNorm * nx - aVelTang * ny) * elasticity;
      a.dy = (bVelNorm * ny + aVelTang * nx) * elasticity;
      b.dx = (aVelNorm * nx - bVelTang * ny) * elasticity;
      b.dy = (aVelNorm * ny + bVelTang * nx) * elasticity;
    },
    onIconHover(icon) {
      icon.isHovering = true;
      const cx = icon.originX;
      const cy = icon.originY;
      const ix = icon.x + icon.size / 2;
      const iy = icon.y + icon.size / 2;
      let dx = ix - cx;
      let dy = iy - cy;
      let dist = Math.sqrt(dx * dx + dy * dy) || 1e-6;
      if (dist < 1) {
        dx = Math.random() - 0.5;
        dy = Math.random() - 0.5;
        dist = Math.sqrt(dx * dx + dy * dy) || 1e-6;
      }
      dx /= dist;
      dy /= dist;
      icon.dx += dx * this.speed * this.hoverBounce;
      icon.dy += dy * this.speed * this.hoverBounce;
    },
    onIconLeave(icon) {
      icon.isHovering = false;
    }
  },
};
</script>

<style scoped>
.bouncing-icons-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.bouncing-icon {
  position: absolute;
  transition: none;
  will-change: transform;
  pointer-events: auto;
}
</style>