<template>
    <section id="supersonic-df" ref="supersonicDf" class="row rounded-4 text-white text-start section-hover"
        @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousemove="onMouseMove" @click="openStore"
        style="cursor: pointer; position: relative;" tabindex="0" @keydown.enter="openStore"
        @keydown.space.prevent="openStore" aria-label="Open Gang vs Gang in stores">
        <!-- Floating link icon that follows the mouse -->
        <div v-show="hovered" class="link-icon" :style="iconStyle" @click.stop="showStoreMenu = !showStoreMenu"
            :title="'Open in store'">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-link-45deg"
                viewBox="0 0 16 16">
                <path
                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path
                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
        </div>
        <div class="row">
            <div class="col-6">
                <h3 class="fw-bold pb-3">🧩 Drop N Fill</h3>
                <p>
                    <span class="fw-bold">
                        Overview:
                    </span>
                    <br>
                    Drop N Fill is a hyper-casual puzzle game where players drop and stack objects strategically to fill
                    containers or complete levels under simple but satisfying constraints. The game combines intuitive
                    controls with playful visual feedback and a smooth performance experience tailored for casual mobile
                </p>
                <div class="row">
                    <div class="col-lg-6 border-end">
                        <span class="fw-bold">
                            Platform:
                        </span>
                        <br>
                        <ul>
                            <li>
                                Android (Google Play Store)
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 ps-5">
                        <span class="fw-bold">
                            Technology Stack:
                        </span>
                        <br>
                        <ul>
                            <li>
                                Unity Game Engine
                            </li>
                            <li>
                                Blender (3D models)
                            </li>
                        </ul>
                    </div>
                </div>

                <span class="fw-bold">
                    My Role & Responsibilities:
                </span>
                <br>
                As the Core Mechanics Developer, I was responsible for building the main gameplay loop and enhancing the
                game’s overall feel through controls, visuals, and performance tuning.
                <br><br>
                <ul>
                    <li>
                        🎮 In-Game Controls: Designed and implemented responsive drop-and-stack controls that feel
                        precise and easy to learn.
                    </li>
                    <li>
                        ⚙️ Performance Optimization: Tuned and optimized frame rates to ensure consistent, smooth
                        gameplay on a variety of mobile devices.
                    </li>
                    <li>
                        ✨ Cartoon Visual Effects: Created appealing cartoon-style visual effects that boost player
                        feedback and enjoyment without compromising performance.
                    </li>
                    <li>
                        🔁 Gameplay Polish: Focused on delivering a cohesive “game feel” by combining fluid controls and
                        satisfying visual feedback.
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="w-100 mx-auto position-relative" style="max-width:800px; aspect-ratio:4/5;">
                            <img src="../../assets/supersonic/df.gif" alt="drop n fill GIF"
                                class="position-absolute" style="
                                top:6%; left:30.5%; width:39%; height:68%;
                                object-fit:cover;
                                border-radius: 1vw;
                                box-shadow:0 2px 8px rgba(0,0,0,0.08); 
                                z-index: 1;" />
                            <img src="../../assets/iphone-frame.png" alt="iPhone Frame"
                                class="img-fluid w-100 d-block position-absolute" style="z-index: 2;" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <span class="fw-bold">
                        Outcome:
                    </span>
                    <br>
                    <ul>
                        <li>
                            ✅ Developed a polished, replayable core mechanic that supports an engaging, easy-to-pick-up
                            puzzle experience.
                        </li>
                    </ul>
                    <p>
                        <span class="fw-bold">
                            What I Learned:
                        </span>
                        <br>
                        Working on Drop N Fill sharpened my skills in designing core mechanics that balance intuitive
                        controls, performance, and visual feedback for hyper-casual players. I gained valuable
                        experience fine-tuning mobile performance and using stylized effects to amplify player
                        satisfaction.
                    </p>
                </div>
            </div>
        </div>
        <div class="w-100 border my-5" style="height: 1px;"></div>
    </section>
</template>

<script>
export default {
    name: "DropNFill",
    data() {
        return {
            hovered: false,
            showStoreMenu: false,
            mouseX: 0,
            mouseY: 0,
        }
    },
    computed: {
        iconStyle() {
            // Offset the icon 16px to the right and -11px vertically (half icon height)
            // so it appears just right of the pointer and vertically centered
            if (!this.hovered) return { display: 'none' };
            return {
                position: 'fixed',
                left: `${this.mouseX + 16}px`,
                top: `${this.mouseY - 11}px`,
                zIndex: 1000,
                pointerEvents: 'auto',
            };
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$emit('register-section-ref', {
                refName: 'supersonicDf',
                el: this.$el
            });
        });
    },
    methods: {
        openStore(e) {
            window.open('https://play.google.com/store/apps/details?id=com.spacetimer.DropnFill', '_blank');
        },
        onMouseEnter(e) {
            this.hovered = true;
        },
        onMouseLeave(e) {
            this.hovered = false;
            this.showStoreMenu = false;
        },
        onMouseMove(e) {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        }
    }
}
</script>

<style scoped>
.link-icon {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 50%;
    padding: 7px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    transition: background 0.2s;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    /* Remove position absolute/fixed here, handled inline */
}

.link-icon:hover {
    background: rgba(0, 0, 0, 0.85);
}

.store-menu {
    position: fixed;
    /* Will appear near the icon, you may want to adjust this for UX */
    top: auto;
    left: auto;
    background: #222;
    border-radius: 8px;
    padding: 8px 12px;
    z-index: 2000;
    display: flex;
    gap: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.22);
}
</style>