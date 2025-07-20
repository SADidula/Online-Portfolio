<template>
    <section id="supersonic-pu" ref="supersonicPu" class="row rounded-4 text-white text-start section-hover">
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
                <h3 class="fw-bold pb-3">🔓 Phone Unlock</h3>
                <p>
                    <span class="fw-bold">
                        Overview:
                    </span>
                    <br>
                    Phone Unlock is a puzzle-style mobile game where players must solve a lock system within a limited
                    number of attempts to win a prize. The gameplay mixes precision, timing, and strategy to crack
                    increasingly complex lock patterns, with added challenge modes like boss levels and bonus stages.
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
                As the Support Mechanic Developer, I focused on building and refining the mechanics that power the
                game’s bonus levels and boss stages. My work ensured these special stages provided a fresh layer of
                challenge and excitement for players.
                <br><br>
                <ul>
                    <li>
                        🧩 Bonus & Boss Stage Development: Designed and implemented unique support mechanics that
                        expanded core gameplay into high-reward bonus levels and climactic boss encounters.
                    </li>
                    <li>
                        🗂️ Pixel Destruction System: Integrated and fine-tuned a pixel destruction mechanic that
                        dynamically removes parts of the lock or obstacles — a complex feature that added depth to the
                        gameplay and required solving challenging technical hurdles.
                    </li>
                    <li>
                        🔍 Gameplay Polishing: Collaborated with the core team to balance difficulty, ensure smooth
                        interactions, and maintain consistent player experience across different lock systems.
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="w-100 mx-auto position-relative" style="max-width:800px; aspect-ratio:4/5;">
                            <img src="../../assets/supersonic/pu.gif" alt="phone unlock GIF" class="position-absolute"
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
                            🧩 Delivered a polished bonus and boss stage experience that added replay value and variety
                            to the main gameplay loop.
                        </li>
                        <li>
                            ⚙️ Overcame significant technical challenges with custom pixel destruction integration,
                            enhancing my problem-solving and technical implementation skills.
                        </li>
                    </ul>
                    <p>
                        <span class="fw-bold">
                            What I Learned:
                        </span>
                        <br>
                        Working on Phone Unlock strengthened my skills in designing support mechanics that complement
                        core gameplay. I gained hands-on experience integrating complex systems like real-time pixel
                        destruction in Unity, which deepened my understanding of physics interactions, collision
                        management, and dynamic object updates. This project also helped me develop a sharper eye for
                        balancing difficulty and reward to keep players engaged through bonus and boss challenges.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PhoneUnlock",
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
                refName: 'supersonicPu',
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