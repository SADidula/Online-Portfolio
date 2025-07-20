<template>
    <section id="supersonic-ds" ref="supersonicDs" class="row rounded-4 text-white text-start section-hover">
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
                <h3 class="fw-bold pb-3">📦 Delivery Stacks</h3>
                <p>
                    <span class="fw-bold">
                        Overview:
                    </span>
                    <br>
                    Delivery Stacks is a hyper-casual mobile game where players stack and deliver items through fun,
                    physics-based challenges. The game combines intuitive controls, satisfying stacking mechanics, and
                    playful cartoon-style visual effects to create an engaging, repeatable gameplay loop.
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
                As the Core Mechanics Developer, I focused on building the main gameplay systems and ensuring smooth,
                visually appealing performance across devices. My contributions touched every layer of the game’s feel
                and flow.
                <br><br>
                <ul>
                    <li>
                        🎮 In-Game Controls: Designed and implemented responsive player controls that make stacking and
                        navigating feel intuitive and satisfying.
                    </li>
                    <li>
                        ⚙️ Performance Tuning: Optimized game performance and frame rates through careful asset
                        management and real-time profiling to keep gameplay smooth on a wide range of mobile devices.
                    </li>
                    <li>
                        ✨ Cartoon-Style VFX: Created playful, GPU-instanced cartoon particle effects to enhance visual
                        feedback without sacrificing performance.
                    </li>
                    <li>
                        🔁 System Integration: Ensured core mechanics, visual effects, and controls worked seamlessly
                        together for a polished user experience.
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="w-100 mx-auto position-relative" style="max-width:800px; aspect-ratio:4/5;">
                            <img src="../../assets/supersonic/ds.gif" alt="delivery stacks GIF"
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
                            ✅ Delivered a smooth, visually engaging prototype ready for further expansion and testing
                        </li>
                        <li>
                            📱 Achieved stable frame rates and a playful visual style that matched the game’s casual
                            theme
                        </li>
                    </ul>
                    <p>
                        <span class="fw-bold">
                            What I Learned:
                        </span>
                        <br>
                        Working on Delivery Stacks strengthened my ability to develop core mechanics that balance
                        performance, responsiveness, and visual appeal. I deepened my understanding of mobile
                        performance tuning, GPU instancing for efficient effects, and how thoughtful control design
                        directly impacts player satisfaction in hyper-casual games.
                    </p>
                </div>
            </div>
        </div>
        <div class="w-100 border my-5" style="height: 1px;"></div>
    </section>
</template>

<script>
export default {
    name: "DeliveryStacks",
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
                refName: 'supersonicDs',
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