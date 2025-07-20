<template>
  <div class="container-fluid d-flex w-100 vh-100 text-black">
    <div class="row m-3">
      <div class="col-lg-9 container" ref="scrollContainer" style="overflow-y:auto; max-height:100vh;">
        <section id="intro" ref="intro" class="mb-5 pb-5 p-5">
          <h2 class="pb-5">👨‍💻 Introduction</h2>
          <span class="text-start">
            <p class="fw-bold">
              As a Game Developer at Spacetimer, I had the privilege of working for 2 years and 6 months at the
              forefront of hypercasual mobile gaming, collaborating closely with world-class publishers such as Voodoo,
              Supersonic Studios, and Yso Corp.
            </p>
            <p>
              My role involved end-to-end game development, from conceptualizing and prototyping engaging gameplay
              mechanics to optimizing performance and polishing user experiences that resonated with millions of players
              worldwide. Throughout this time, I contributed to several hit games that achieved strong player retention
              and monetization metrics.
            </p>
            <p>
              This experience gave me valuable insights into rapid iteration cycles, cross-functional teamwork, and
              publishing strategies in the highly competitive mobile gaming industry, while sharpening my skills in game
              design, Unity development, and analytics-driven optimization.
            </p>
          </span>
        </section>
        <section id="ysocorp" ref="ysocorp" class="mb-5 pb-5 p-5 rounded-4 bg-black-cs text-white">
          <div class="col-lg-12">
            <h2 class="pb-3">🎯 Yso Corp</h2>
            <RopeGang @register-section-ref="registerSectionRef" />
          </div>
        </section>
        <section id="voodoo" ref="voodoo" class="mb-5 pb-5 p-5 rounded-4 bg-main-cs text-black">
          <div class="col-lg-12">
            <h2 class="pb-3">🕹️ Voodoo SAS</h2>
            <ScribbleLove @register-section-ref="registerSectionRef" />
            <DressUp @register-section-ref="registerSectionRef" />
            <GangVsGang @register-section-ref="registerSectionRef" />
          </div>
        </section>
        <section id="supersonic" ref="supersonic" class="mb-5 pb-5 p-5 rounded-4 bg-black-cs text-white">
          <h2 class="pb-3">💥 Supersonic Studios</h2>
          <DeliveryStacks @register-section-ref="registerSectionRef" />
          <DropNFill @register-section-ref="registerSectionRef" />
          <PhoneUnlock @register-section-ref="registerSectionRef" />
        </section>
        <section id="synopsis" ref="synopsis" class="mb-5 pb-5 p-5">
          <h2 class="pb-5">🎮 Synopsis</h2>
          <span class="text-start">
            <p class="fw-bold">
              I’m a game developer with hands-on experience building hyper-casual and arcade-style mobile games for
              major publishers like Voodoo, Super Sonic, Yso Corp, and others. During my time at Spacetimer Studio, I
              focused on designing and developing engaging prototypes that follow market trends and deliver the best
              possible player experience — from ideation and mechanics to playtesting with real players and rapid
              iteration.
            </p>

            <p>
              Over this period, I’ve deepened my expertise in Unity, advanced C# programming, and 3D mobile game
              development. I specialize in creating responsive controls, smooth movement systems, performance
              optimizations, micro-interactions, and custom shaders to ensure every game feels polished and fun to play.
              I have experience implementing and integrating third-party SDKs such as Facebook, Adjust, and
              GameAnalytics, as well as packaging and publishing games to Google Play through the Developer Console.
            </p>

            <p>
              To date, I have developed 18 mobile game projects independently and collaborated on 11 mobile games as a
              core team developer, always driven by the goal of delivering intuitive, satisfying, and trend-driven
              experiences to players worldwide.
            </p>
          </span>
        </section>
      </div>
      <div class="col-lg-3 d-none d-lg-block py-5 pt-5 mt-5">
        <nav class="toc sticky-top container">
          <ul class="list-unstyled">
            <li :class="{ active: activeSection === 'home' }">
              <a href="#" @click.prevent="goToClientView()" :class="{ 'fw-bold': activeSection === 'home' }">Home</a>
              <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
            </li>
            <li :class="{ active: activeSection === 'intro' }">
              <a href="#" @click.prevent="scrollToSection('intro')"
                :class="{ 'fw-bold': activeSection === 'intro' }">Introduction</a>
              <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
            </li>
            <li :class="{ active: isActiveParent('ysocorp') }">
              <a href="#" @click.prevent="scrollToSection('ysocorp')"
                :class="{ 'fw-bold': isActiveParent('ysocorp') }">Yso Corp</a>
              <div class="row">
                <div class="col-lg-12 offset-lg-2">
                  <ul class="list-unstyled ms-3">
                    <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    <li :class="{ active: activeSection === 'yso-rg' }">
                      <a href="#" @click.prevent="scrollToSection('yso-rg')"
                        :class="{ 'fw-bold': activeSection === 'yso-rg' }">Rope Gang</a>
                      <!-- <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div> -->
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
            </li>
            <li :class="{ active: isActiveParent('voodoo') }">
              <a href="#" @click.prevent="scrollToSection('voodoo')"
                :class="{ 'fw-bold': isActiveParent('voodoo') }">Voodoo SAS</a>
              <div class="row">
                <div class="col-lg-12 offset-lg-2">
                  <ul class="list-unstyled ms-3">
                    <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    <li :class="{ active: activeSection === 'voodoo-sl' }">
                      <a href="#" @click.prevent="scrollToSection('voodoo-sl')"
                        :class="{ 'fw-bold': activeSection === 'voodoo-sl' }">Scribble Love</a>
                      <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    </li>
                    <li :class="{ active: activeSection === 'voodoo-du' }">
                      <a href="#" @click.prevent="scrollToSection('voodoo-du')"
                        :class="{ 'fw-bold': activeSection === 'voodoo-du' }">Dress Up</a>
                      <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    </li>
                    <li :class="{ active: activeSection === 'voodoo-gvg' }">
                      <a href="#" @click.prevent="scrollToSection('voodoo-gvg')"
                        :class="{ 'fw-bold': activeSection === 'voodoo-gvg' }">Gang Vs Gang</a>
                      <!-- <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div> -->
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
            </li>
            <li :class="{ active: isActiveParent('supersonic') }">
              <a href="#" @click.prevent="scrollToSection('supersonic')"
                :class="{ 'fw-bold': isActiveParent('supersonic') }">Supersonic Studios</a>
              <div class="row">
                <div class="col-lg-12 offset-lg-2">
                  <ul class="list-unstyled ms-3">
                    <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    <li :class="{ active: activeSection === 'supersonic-ds' }">
                      <a href="#" @click.prevent="scrollToSection('supersonic-ds')"
                        :class="{ 'fw-bold': activeSection === 'supersonic-ds' }">Delivery Stacks</a>
                      <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    </li>
                    <li :class="{ active: activeSection === 'supersonic-df' }">
                      <a href="#" @click.prevent="scrollToSection('supersonic-df')"
                        :class="{ 'fw-bold': activeSection === 'supersonic-df' }">Drop N Fill</a>
                      <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div>
                    </li>
                    <li :class="{ active: activeSection === 'supersonic-pu' }">
                      <a href="#" @click.prevent="scrollToSection('supersonic-pu')"
                        :class="{ 'fw-bold': activeSection === 'supersonic-pu' }">Phone Unlock</a>
                      <!-- <div class="border pb-3 m-2 mx-auto" style="width: 1px;"></div> -->
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
            </li>
            <li :class="{ active: activeSection === 'synopsis' }">
              <a href="#" @click.prevent="scrollToSection('synopsis')"
                :class="{ 'fw-bold': activeSection === 'synopsis' }">Synopsis</a>
              <!-- <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div> -->
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import RopeGang from './yso/ropegang.vue';
import ScribbleLove from './voodoo/scribblelove.vue'
import DressUp from './voodoo/dressup.vue';
import GangVsGang from './voodoo/gangvsgang.vue';
import PhoneUnlock from './supersonic/phoneunlock.vue';
import DeliveryStacks from './supersonic/deliverystacks.vue';
import DropNFill from './supersonic/dropnfill.vue';

export default {
  name: "GEView",
  components: {
    RopeGang,
    ScribbleLove,
    DressUp,
    GangVsGang,
    PhoneUnlock,
    DeliveryStacks,
    DropNFill,
  },
  data() {
    return {
      sectionOrder: [
        "intro",
        "ysocorp",
        "yso-rg",
        "voodoo",
        "voodoo-sl",
        "voodoo-du",
        "voodoo-gvg",
        "supersonic",
        "supersonic-ds",
        "supersonic-df",
        "supersonic-pu",
        "synopsis"
      ],
      activeSection: "intro",
      sectionRefs: {},
    };
  },
  mounted() {
    this.$refs.scrollContainer.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll();
  },
  beforeDestroy() {
    this.$refs.scrollContainer.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      let refName = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
      const el = this.$refs[refName] || this.sectionRefs[refName];
      const container = this.$refs.scrollContainer;

      if (el && container) {
        // Compute offset relative to scroll container
        let offset = 0;
        let current = el;
        while (current && current !== container) {
          offset += current.offsetTop;
          current = current.offsetParent;
        }
        container.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      }
    },
    goToClientView() {
      this.$emit('navigate-home');
    },
    isActiveParent(parentId) {
      if (this.activeSection === parentId) return true;
      return this.activeSection.startsWith(parentId + "-");
    },
    onScroll() {
      const container = this.$refs.scrollContainer;
      if (!container) return;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      let current = this.sectionOrder[0];
      let maxVisibleTop = -Infinity;

      for (const id of this.sectionOrder) {
        let refName = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
        const el = this.$refs[refName] || this.sectionRefs[refName];
        if (el) {
          // Calculate offset relative to scroll container
          let offset = 0;
          let currentEl = el;
          while (currentEl && currentEl !== container) {
            offset += currentEl.offsetTop;
            currentEl = currentEl.offsetParent;
          }
          // Section is considered active if its top is above the bottom of the container
          if (offset <= scrollTop + 80 && offset > maxVisibleTop) {
            maxVisibleTop = offset;
            current = id;
          }
        }
      }
      this.activeSection = current;
    },
    registerSectionRef({ refName, el }) {
      console.log('Received section ref:', refName, el);
      this.sectionRefs[refName] = el;
    },
  },
};
</script>

<style scoped>
.container {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: hidden;
}

.container::-webkit-scrollbar {
  display: none;
}

.toc {
  max-height: 80vh;
  overflow-y: auto;
  padding-left: 1rem;
  border-left: 2px solid #eee;
}

.toc ul {
  padding-left: 0;
}

.toc li {
  margin-bottom: 0.5rem;
}

.toc li.active>a {
  color: #007bff;
  text-decoration: underline;
}

.toc a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.toc a.fw-bold {
  color: #007bff;
}

.toc ul ul {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.toc ul ul li {
  margin-bottom: 0.25rem;
}
</style>