<template>
    <section id="swinburne-faqbot" ref="swinburneFaqbot" class="row rounded-4 text-black text-start section-hover">
        <div class="row">
            <h2 class="pb-3 text-center">💬 Swinburne FAQ AI Chatbot <br> (LLM + LangChain)</h2>
            <p>
                <span class="fw-bold">
                    Overview:
                </span>
                <br>
                This project is a FAQ AI assistant built using Python, Streamlit, and LangChain, designed to preload and
                answer common questions about the Swinburne University Online Platform. It crawls real online
                information from Swinburne’s official resources and transforms that into a context-aware chatbot that
                delivers fast, accurate answers to user queries.
            </p>
            <span class="fw-bold">
                Key Technologies:
            </span>
            <br>
            <ul>
                <li>
                    LangChain: Orchestrates LLM-powered question answering from preloaded and chunked context.
                </li>
                <li>
                    Streamlit: Front-end framework used to deliver a lightweight and clean interactive chat interface.
                </li>
                <li>
                    BeautifulSoup & Requests: Used for scraping public information from Swinburne’s site.
                </li>
                <li>
                    OpenAI LLMs: Power the reasoning and contextual matching of answers.
                </li>
            </ul>
            <span class="fw-bold">
                Technical Highlights:
            </span>
            <br>
            <ul>
                <li>
                    Custom Data Crawler: Scrapes relevant content from specific university pages and cleans it for
                    semantic search.
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <img class="w-100" src="../../assets/personal/faqdocsearchinscope.png"
                                alt="FAQ in-scope document search">
                        </div>
                    </div>
                </li>
                <li>
                    Embedding with OpenAI: Used LangChain’s integration with OpenAI’s embedding model to convert webpage
                    content into high-dimensional vectors for semantic retrieval.
                    <div class="row">
                        <div class="col-lg-10 mx-auto center">
                            <img class="w-50" src="../../assets/personal/faqembeddings.png"
                                alt="FAQ in-scope document search">
                        </div>
                    </div>
                </li>
                <li>
                    Retrieval-Augmented Generation (RAG): Matches user queries with the closest relevant document chunks
                    for contextual response.
                </li>
                <li class="pb-2">
                    Streamlit UI: Includes live chat interface, sidebar controls, and real-time query execution.
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
                            Structured Data from Dynamic Pages: Adapted WebBaseLoader to parse only relevant sections of
                            HTML
                            while ignoring navigation bars, footers, and dynamic scripts.
                        </li>
                        <li>
                            Page-Specific Tuning: Managed multiple Swinburne FAQ URLs with slight HTML differences and
                            ensured
                            consistent text extraction across them.
                        </li>
                        <li>
                            Preprocessing for Chunking: Post-processed WebBaseLoader output (e.g., removing noise,
                            fixing
                            newline spacing) before chunking to improve embedding accuracy.
                        </li>
                        <li>
                            LLM Response Grounding: Ensured that retrieved content from the WebBaseLoader stayed
                            relevant and
                            grounded in Swinburne’s official data by limiting the retrieval scope.
                        </li>
                        <li>
                            Embedding Relevance: Tested different embedding models and dimensionalities to improve
                            semantic
                            matching accuracy and reduce irrelevant responses.
                        </li>
                        <li>
                            Streamlit Optimization: Managed session states and API latency to deliver real-time
                            responses
                            without freezing or reloading the app unnecessarily.
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
                            Delivered a fully functional LLM-powered FAQ assistant capable of answering
                            Swinburne-related
                            queries with high contextual accuracy.
                        </li>
                        <li>
                            Demonstrated successful integration of web scraping, vector-based retrieval, and LLM
                            response
                            generation into a cohesive, production-ready workflow.
                        </li>
                        <li>
                            Validated the solution through internal testing with actual FAQ queries from Swinburne’s
                            site,
                            achieving fast and relevant responses.
                        </li>
                        <li>
                            Created a scalable template that can be adapted to any institution or knowledge base with
                            minimal
                            configuration.
                        </li>
                        <li>
                            Positioned the project as a strong foundation for student support automation, live assistant
                            tools,
                            or internal knowledge agents.
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                <span class="fw-bold">
                    What I Learned:
                </span>
                <br>
                Through this project, I gained practical experience in building LLM applications beyond chat
                completions, learning how to structure pipelines for retrieval-augmented generation using LangChain. I
                also developed a deeper understanding of data preprocessing, including HTML parsing and chunking for
                embeddings, and how vector search influences result accuracy. Additionally, I learned how to deploy and
                optimize lightweight interfaces using Streamlit to deliver fast feedback in a user-friendly way.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SwinburneFAQBot",
    mounted() {
        this.$nextTick(() => {
            this.$emit('register-section-ref', {
                refName: 'swinburneFaqbot',
                el: this.$refs.swinburneFaqbot
            });
        });
    },
}
</script>

<style scoped></style>