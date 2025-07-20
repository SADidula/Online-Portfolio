<template>
    <section id="voodoo-gvg" ref="voodooGvg" class="row rounded-4 text-black text-start section-hover">
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
                <h3 class="fw-bold pb-3">🥷 Gang vs Gang</h3>
                <p>
                    <span class="fw-bold">
                        Overview:
                    </span>
                    <br>
                    Gang vs Gang is an arcade-style crowd-control game inspired by the team’s earlier hit Rope Gang. The
                    game expands on the rope mechanic concept by introducing arithmetic-based crowd management — players
                    guide a group through dynamic gates that add, multiply, or subtract units from their gang, all while
                    navigating obstacles and enemy encounters.
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
                As the Core Mechanic Developer and Level Designer, my goal was to evolve the strengths of Rope Gang
                while addressing its limitations. I focused on implementing engaging core systems and designing balanced
                levels that keep the gameplay loop challenging yet satisfying.
                <br><br>
                <ul>
                    <li>
                        ⚙️ Core Gameplay Implementation: Developed the crowd-control system using real-time arithmetic
                        operations (add, multiply, divide, subtract) that affect the size of the player’s gang.
                    </li>
                    <li>
                        🧩 Level Design & Progression: Designed levels with progressively challenging obstacles,
                        arithmetic gates, and enemy encounters to test players’ quick math and strategic
                        decision-making.
                    </li>
                    <li>
                        🔁 Improved Mechanics: Identified and resolved weaknesses from Rope Gang, improving control
                        feel, obstacle design, and player feedback loops.
                    </li>
                    <li>
                        📈 Playtesting & Balancing: Released a tested version on Google Play, gathering real player
                        feedback to refine level difficulty and mechanic clarity.
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="w-100 mx-auto position-relative" style="max-width:800px; aspect-ratio:4/5;">
                            <img src="../../assets/voodoo/gvg.gif" alt="Gang vs gang GIF" class="position-absolute"
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
                            🚀 Achieved over 500+ downloads during test release on Google Play
                        </li>
                        <li>
                            🎯 Positive feedback on improved control, clearer goals, and more rewarding gameplay loop
                        </li>
                    </ul>
                    <p>
                        <span class="fw-bold">
                            What I Learned:
                        </span>
                        <br>
                        Working on Gang vs Gang taught me how to expand on an existing game idea to deliver a stronger
                        player experience. I deepened my understanding of balancing real-time arithmetic mechanics with
                        crowd simulation, refined my level design skills for player flow and challenge pacing, and
                        learned how to iterate quickly based on live playtests to address gameplay weaknesses.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "GangVsGang",
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
                refName: 'voodooGvg',
                el: this.$el
            });
        });
    },
    methods: {
        openStore(e) {
            window.open('https://play.google.com/store/apps/details?id=com.spacetimer.GangvsGang', '_blank');
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