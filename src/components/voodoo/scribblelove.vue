<template>
    <section id="voodoo-sl" ref="voodooSl" class="row rounded-4 text-black text-start section-hover">
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
                <h3 class="fw-bold pb-3">✏️ Scribble Love</h3>
                <p>
                    <span class="fw-bold">
                        Overview:
                    </span>
                    <br>
                    Scribble Love is a casual puzzle game where players draw directly on the screen to spawn physics
                    objects that interact with the environment and guide adorable dolls to their destination. The unique
                    drawing mechanic combines player creativity with problem-solving, creating a playful and engaging
                    experience.
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
                                Blender (3D Modeling)
                            </li>
                        </ul>
                    </div>
                </div>

                <span class="fw-bold">
                    My Role & Responsibilities:
                </span>
                <br>
                As the Ideation, Design, and Mechanics Developer, I was responsible for shaping the game concept,
                designing visuals and models, and implementing both core and quality-of-life (QoL) mechanics to ensure
                smooth and intuitive gameplay.
                <br><br>
                <ul>
                    <li>
                        💡 Game Concept & Design: Led the ideation phase, developing the core idea of drawing to solve
                        puzzles and defining the game’s visual style.
                    </li>
                    <li>
                        🎨 3D/2D Modeling: Designed and created in-game models and assets, aligning with the game’s
                        playful, hand-drawn feel.
                    </li>
                    <li>
                        🧩 Core Mechanics Development: Implemented the drawing system that translates user sketches into
                        spawnable physical objects with real-time physics interactions.
                    </li>
                    <li>
                        ⚙️ QoL Features: Added player-friendly features like undo, reset, clear drawings, and intuitive
                        touch controls for a seamless gameplay experience.
                    </li>
                    <li>
                        🎯 Level & Puzzle Design: Developed and tested multiple puzzle scenarios to ensure each level
                        challenges players to think creatively.
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="w-100 mx-auto position-relative" style="max-width:800px; aspect-ratio:4/5;">
                            <img src="../../assets/voodoo/sl.gif" alt="Scribble Love GIF" class="position-absolute"
                                style="
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
                            📈 Tested on Google Play with 1,000+ downloads
                        </li>
                        <li>
                            ✏️ Players praised the unique mechanic and playful art style
                        </li>
                    </ul>
                    <p>
                        <span class="fw-bold">
                            What I Learned:
                        </span>
                        <br>
                        Through Scribble Love, I learned how to translate creative concepts into interactive mechanics,
                        implement complex drawing and physics systems in Unity, and design levels that balance freedom
                        and challenge. I also gained experience refining user experience through intuitive controls and
                        QoL features, and strengthened my skills in asset design and collaborative iteration.
                    </p>
                </div>
            </div>
        </div>
        <div class="w-100 border my-5" style="height: 1px;"></div>
    </section>
</template>

<script>
export default {
    name: "ScribbleLove",
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
                refName: 'voodooSl',
                el: this.$el
            });
        });
    },
    methods: {
        openStore(e) {
            window.open('https://play.google.com/store/apps/details?id=com.spacetimer.scribblelovers', '_blank');
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