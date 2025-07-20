<template>
    <section id="music-streamapp" ref="musicStreamapp" class="row rounded-4 text-black text-start section-hover">
        <div class="row">
            <h2 class="pb-3 text-center">🎵 YouTube Based Music Streaming App</h2>
            <p>
                <span class="fw-bold">
                    Overview:
                </span>
                <br>
                A mobile app built with Flutter that leverages the YouTube Data API to deliver a YouTube-powered music
                streaming experience. The app allows users to search for music, stream audio, and interact with YouTube
                content within a minimal and responsive mobile UI.
            </p>
            <div class="row">
                <div class="col-lg-6 border-end">
                    <span class="fw-bold">
                        Key Technologies:
                    </span>
                    <br>
                    <ul>
                        <li>
                            Flutter: Built for cross-platform compatibility with smooth UI performance.
                        </li>
                        <li>
                            YouTube Data API (v3): Integrated for real-time access to music content from YouTube.
                        </li>
                        <li>
                            Dart Language: Used to manage asynchronous data handling and media control.
                        </li>
                        <li>
                            Google HTTP Services: OAuth and REST API integration for YouTube access and query handling.
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 ps-5">
                    <span class="fw-bold">
                        Technical Highlights:
                    </span>
                    <br>
                    <ul>
                        <li>
                            Search Interface: Real-time search input field connected to YouTube’s API, returning music
                            videos
                            based on user input.
                        </li>
                        <li>
                            Audio Playback: Extracts playable streams from YouTube videos using lightweight audio
                            wrappers.
                        </li>
                        <li>
                            Metadata Display: Shows thumbnails, titles, and artist/channel info with YouTube branding
                            compliance.
                        </li>
                        <li>
                            Asynchronous Control: Handles search, load, and stream asynchronously for responsive
                            experience.
                        </li>
                    </ul>
                </div>
            </div>
            <span class="fw-bold">
                Challenges Solved:
            </span>
            <br>
            <ul>
                <li>
                    YouTube API Limitations: Navigated restrictions around stream playback and API quota.
                </li>
                <li>
                    Audio-Only Playback: Developed logic to extract and stream audio content while suppressing video
                    rendering.
                </li>
                <li>
                    API Key Handling: Securely handled API keys for development environments.
                </li>
                <li>
                    Playback Performance: Optimized streaming latency and buffer management for mobile devices.
                </li>
            </ul>
            <span class="fw-bold">
                Impact & Outcome:
            </span>
            <br>
            <ul>
                <li>
                    Built a functional and responsive prototype music app, capable of streaming live music from YouTube.
                </li>
                <li>
                    Demonstrated how Flutter can be used for fast media UI development across platforms.
                </li>
                <li>
                    Gained insights into media streaming architecture, Google API integration, and mobile UX for
                    music-based apps.
                </li>
            </ul>
            <p>
                <span class="fw-bold">
                    What I Learned:
                </span>
                <br>
                This project helped me gain hands-on experience with Google’s YouTube Data API, working around its
                limitations to stream audio efficiently. I learned how to use Flutter’s media and UI packages to build
                scalable, asynchronous applications with strong performance. It also sharpened my understanding of API
                rate limits, stream buffering, and content retrieval pipelines on mobile platforms.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "YoutubeStreamingApp",
    mounted() {
        this.$nextTick(() => {
            this.$emit('register-section-ref', {
                refName: 'musicStreamapp',
                el: this.$refs.musicStreamapp
            });
        });
    },
}
</script>

<style scoped></style>