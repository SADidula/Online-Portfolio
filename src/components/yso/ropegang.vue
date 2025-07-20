<template>
    <section id="yso-rg" ref="ysoRg" class="row rounded-4 text-white text-start section-hover"
        @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousemove="onMouseMove" @click="openStore"
        style="cursor: pointer; position: relative;" tabindex="0" @keydown.enter="openStore"
        @keydown.space.prevent="openStore" aria-label="Open Rope Gang in app stores">
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
                <h3 class="fw-bold pb-3">🪢 Rope Gang</h3>
                <p>
                    <span class="fw-bold">
                        Overview:
                    </span>
                    <br>
                    Rope Gang is a hyper-casual 3D puzzle-action mobile game where players drag and guide a group of
                    stick
                    figures through various obstacles using an elastic rope mechanic. The game rewards strategic
                    group
                    movement and coordination while maintaining an easy-to-pick-up experience designed for short,
                    repeatable
                    play sessions.
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
                            <li>
                                iOS (Apple Play Store)
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
                                Blender (3D Modeling)
                            </li>
                        </ul>
                    </div>
                </div>

                <span class="fw-bold">
                    My Role & Responsibilities:
                </span>
                <br>
                As the Mechanics Developer, I was responsible for refining the core gameplay systems, optimizing
                performance, and supporting level design. My contributions were pivotal in scaling the game to
                over 1
                million downloads across iOS and Android platforms.
                <br><br>
                <ul>
                    <li>
                        🧠 Core Systems Tuning: Implemented and fine-tuned the enemy health and damage system,
                        ensuring
                        smooth and predictable in-game combat behavior.
                    </li>
                    <li>
                        🪢 Rope Mechanic Optimization: Reworked the rope physics for better flexibility and
                        responsiveness
                        under variable device performance constraints.
                    </li>
                    <li>
                        🧩 Support Mechanics: Fine-tuned gameplay feel through iterative prototyping, covering
                        collision
                        feedback, player progression timing, and control responsiveness.
                    </li>
                    <li>
                        📱 Cross-Platform Performance: Led frame rate and performance optimizations for both iOS and
                        Android, targeting smooth 60 FPS gameplay even on lower-end devices.
                    </li>
                    <li>
                        🎯 Asset Efficiency: Refactored and structured game assets for modularity and reuse,
                        improving
                        development speed and build sizes.
                    </li>
                    <li>
                        🧪 Level Design Support: Contributed to the layout and testing of game levels, ensuring a
                        balanced
                        difficulty curve and engaging player flow.
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="w-100 mx-auto position-relative" style="max-width:800px; aspect-ratio:4/5;">
                            <img src="../../assets/yso/rg.gif" alt="Rope Gang GIF" class="position-absolute" style="
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
                            📈 1M+ Downloads across Google Play and App Store
                        </li>
                        <li>
                            🔄 High retention from polished game feel and smooth performance
                        </li>
                        <li>
                            🧠 Valuable technical insights gained into hyper-casual mechanics and physics-based
                            gameplay
                            loops
                        </li>
                    </ul>
                    <p>
                        <span class="fw-bold">
                            What I Learned:
                        </span>
                        <br>
                        Through Rope Gang, I strengthened my skills in developing physics-based mechanics,
                        optimizing
                        mobile
                        performance across iOS and Android, and structuring flexible game assets for fast iteration.
                        I
                        gained
                        valuable experience collaborating with designers, balancing gameplay feel, and delivering a
                        polished
                        release that reached over a million players worldwide.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "RopeGang",
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
                refName: 'ysoRg',
                el: this.$refs.ysoRg
            });
        });
    },
    methods: {
        openStore(e) {
            // Only open the default link if the popup is not open
            if (!this.showStoreMenu) {
                window.open('https://play.google.com/store/apps/details?id=com.spacetimer.RopeGang&hl=en_AU', '_blank');
                window.open('https://apps.apple.com/au/app/rope-gang/id1621681205', '_blank');
            }
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