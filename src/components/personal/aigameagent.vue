<template>
    <section id="adaptive-agent" ref="adaptiveAgent" class="row rounded-4 text-white text-start section-hover">
        <div class="row">
            <h2 class="pb-3 text-center">🎮 Adaptive Agent for FPS Games <br> (Reinforcement Learning)</h2>
            <p>
                <span class="fw-bold">
                    Overview:
                </span>
                <br>
                As my final-year university capstone, I developed an adaptive AI agent for first-person shooter games
                using the Pogamut platform. The goal was to create an agent that could learn and evolve its strategy in
                real-time gameplay using Reinforcement Learning.
            </p>
            <span class="fw-bold">
                Key Technologies:
            </span>
            <br>
            <ul>
                <li>
                    Q-Learning & SARSA: Implemented core algorithms to enable the agent to learn optimal actions
                    through trial and error.
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <img class="w-100 pb-3" src="../../assets/personal/qvalueupdated.png" alt="Q value update">
                        </div>
                    </div>
                </li>
                <li>
                    Pogamut Platform: Used for integrating AI agents within the Unreal Tournament 2004
                    environment for realistic testing.
                </li>
                <li>
                    Weapon Refinement System: Designed a dynamic module for the agent to refine its weapon
                    choices over time based on combat performance.
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <img class="w-100 pb-2" src="../../assets/personal/weaponselector.png"
                                alt="Weapon optimiser">
                        </div>
                    </div>
                </li>
            </ul>
            <span class="fw-bold">
                Technical Highlights:
            </span>
            <br>
            <ul>
                <li>
                    Dynamic Weapon Optimization: Built a real-time feedback system that helps the agent analyze
                    weapon effectiveness and adapt its selection strategy mid-game.
                </li>
                <li>
                    Enhanced Navigation: Improved pathfinding algorithms allowed the agent to pick the most
                    advantageous items and routes, adjusting to changing in-game conditions.
                </li>
                <li class="pb-2">
                    Context-Aware Behavior: Combined state-based decision-making with reinforcement learning,
                    enabling the agent to act more human-like when switching tactics.
                </li>
            </ul>
            <div class="row pb-2">
                <div class="col-lg-6 border-end">
                    <span class="fw-bold">
                        Challenges Solved:
                    </span>
                    <br>
                    <ul>
                        <li>
                            Integrating multiple learning algorithms (Q-learning & SARSA) to handle different in-game
                            scenarios.
                        </li>
                        <li>
                            Balancing exploration vs. exploitation to keep the agent’s strategy dynamic yet efficient.
                        </li>
                        <li>
                            Tuning reward functions for realistic and rewarding gameplay behaviors.
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 ps-5">
                    <span class="fw-bold">
                        Impact & Outcome:
                    </span>
                    <br>
                    <ul>
                        <li>
                            Successfully demonstrated an AI agent that adapts its combat tactics and resource gathering
                            over
                            multiple matches.
                        </li>
                        <li>
                            Provided a solid foundation for future AI research in game agents that learn complex
                            behaviors
                            dynamically.
                        </li>
                        <li>
                            Gained recognition within the university for advanced use of reinforcement learning in
                            interactive
                            environments.
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                <span class="fw-bold">
                    What I Learned:
                </span>
                <br>
                Through this project, I gained hands-on experience applying Reinforcement Learning concepts like
                Q-Learning and SARSA in a real-time gaming context. I learned how to design reward functions and
                decision states to create believable, adaptive AI behavior while balancing performance and realism.
                Working with the Pogamut platform and Unreal Tournament taught me how to integrate complex AI logic into
                existing game engines and troubleshoot challenges in dynamic environments. This project strengthened my
                skills in iterative experimentation, testing, and fine-tuning AI systems — and deepened my understanding
                of how machine learning can drive smarter, more engaging gameplay experiences.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "AdaptiveAgent",
    mounted() {
        this.$nextTick(() => {
            this.$emit('register-section-ref', {
                refName: 'adaptiveAgent',
                el: this.$refs.adaptiveAgent
            });
        });
    },
}
</script>

<style scoped></style>