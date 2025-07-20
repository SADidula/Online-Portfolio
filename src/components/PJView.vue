<template>
    <div class="container-fluid d-flex w-100 vh-100 text-black">
        <div class="row m-3">
            <div class="col-lg-9 container" ref="scrollContainer" style="overflow-y:auto; max-height:100vh;">
                <section id="intro" ref="intro" class="mb-5 pb-5 p-5">
                    <h2 class="pb-5">👨‍💻 Introduction</h2>
                    <span class="text-start">
                        <p class="fw-bold">
                            As an independent developer, I’ve dedicated the past few years to building AI-driven and
                            experimental software projects that push my technical boundaries and expand my understanding
                            of diverse programming paradigms.
                        </p>
                        <p>
                            From developing an Artificial Agent for FPS Games using reinforcement learning to creating a
                            LangChain-powered FAQ LLM bot, a Hybrid Machine Learning model for malware detection that
                            combines CNN, LSTM, and Particle Swarm Optimization (PSO) for enhanced attack prediction,
                            and even a custom YouTube Music App, I’ve explored how AI, ML, and intuitive interfaces
                            intersect to solve unique problems.
                        </p>
                        <p>
                            These projects, built with Python, Objective-C, Java, and C# and etc, have deepened my
                            expertise in
                            practical AI applications, hybrid neural networks, metaheuristic optimization, and
                            full-stack development. Although primarily self-initiated and tested in academic or
                            prototype contexts, they reflect my drive to experiment with new technologies — most
                            recently branching into Vue to sharpen my modern web development skills.
                        </p>
                        <p>
                            This journey has strengthened my ability to learn rapidly, test rigorously, and apply
                            emerging tools creatively — qualities I bring to every new challenge I tackle.
                        </p>
                    </span>
                </section>
                <section class="mb-5 pb-5 p-5 rounded-4 bg-black-cs text-white">
                    <div class="col-lg-12">
                        <MalwareDetector @register-section-ref="registerSectionRef" />
                    </div>
                </section>
                <section class="mb-5 pb-5 p-5 rounded-4 bg-main-cs text-white">
                    <div class="col-lg-12">
                        <SwinFAQBot @register-section-ref="registerSectionRef" />
                    </div>
                </section>
                <section class="mb-5 pb-5 p-5 rounded-4 bg-black-cs text-white">
                    <div class="col-lg-12">
                        <AdaptiveAgent @register-section-ref="registerSectionRef" />
                    </div>
                </section>
                <section class="mb-5 pb-5 p-5 rounded-4 bg-main-cs text-white">
                    <div class="col-lg-12">
                        <MusicStreamApp @register-section-ref="registerSectionRef" />
                    </div>
                </section>
            </div>
            <div class="col-lg-3 d-none d-lg-block py-5 pt-5 mt-5">
                <nav class="toc sticky-top container">
                    <ul class="list-unstyled">
                        <li :class="{ active: activeSection === 'home' }">
                            <a href="#" @click.prevent="goToClientView()"
                                :class="{ 'fw-bold': activeSection === 'home' }">Home</a>
                            <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
                        </li>
                        <li :class="{ active: activeSection === 'intro' }">
                            <a href="#" @click.prevent="scrollToSection('intro')"
                                :class="{ 'fw-bold': activeSection === 'intro' }">Introduction</a>
                            <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
                        </li>
                        <li :class="{ active: activeSection === 'malware-detector' }">
                            <a href="#" @click.prevent="scrollToSection('malware-detector')"
                                :class="{ 'fw-bold': activeSection === 'malware-detector' }">Malware Detection Model</a>
                            <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
                        </li>
                        <li :class="{ active: activeSection === 'swinburne-faqbot' }">
                            <a href="#" @click.prevent="scrollToSection('swinburne-faqbot')"
                                :class="{ 'fw-bold': activeSection === 'swinburne-faqbot' }">Swinburne FAQ Bot</a>
                            <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
                        </li>
                        <li :class="{ active: activeSection === 'adaptive-agent' }">
                            <a href="#" @click.prevent="scrollToSection('adaptive-agent')"
                                :class="{ 'fw-bold': activeSection === 'adaptive-agent' }">Adaptive Agent</a>
                            <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
                        </li>
                        <li :class="{ active: activeSection === 'music-streamapp' }">
                            <a href="#" @click.prevent="scrollToSection('music-streamapp')"
                                :class="{ 'fw-bold': activeSection === 'music-streamapp' }">Music App</a>
                            <!-- <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div> -->
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import AdaptiveAgent from '../components/personal/aigameagent.vue'
import SwinFAQBot from '../components/personal/swinfaqbot.vue'
import MalwareDetector from '../components/personal/malwaredetecthybrid.vue'
import MusicStreamApp from '../components/personal/youtubestreamingmusicapp.vue'

export default {
    name: "PJView",
    components: {
        AdaptiveAgent,
        SwinFAQBot,
        MalwareDetector,
        MusicStreamApp
    },
    data() {
        return {
            sectionOrder: [
                "intro",
                "adaptive-agent",
                "swinburne-faqbot",
                "malware-detector",
                "music-streamapp"
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