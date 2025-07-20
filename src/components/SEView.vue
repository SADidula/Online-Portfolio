<template>
  <div class="container-fluid d-flex w-100 vh-100 text-black">
    <div class="row m-3">
      <div class="col-lg-9 container" ref="scrollContainer" style="overflow-y:auto; max-height:100vh;">
        <section id="intro" ref="intro" class="mb-5 pb-5 p-5">
          <h2 class="pb-5">👨‍💻 Introduction</h2>
          <span class="text-start">
            <p class="fw-bold">
              As a Full Stack Developer at Dialog Ideamart, Dialog Axiata’s IoT and innovation-driven department-I had
              the
              opportunity to work at the intersection of scalable backend services and intuitive user experiences for
              over a year.
            </p>
            <p>
              My role spanned end-to-end development, from designing RESTful APIs and integrating third-party
              services to building responsive front-end interfaces that empowered developers and businesses across Sri
              Lanka. During my 1 year and 1 month employment, I contributed to a variety of impactful projects under the
              IoT
              department, gaining hands-on experience with real-time data systems, microservices architecture, and
              cloud-native deployments.
            </p>
            <p>
              This period significantly deepened my understanding of agile development, secure
              API design, and full-stack system integration in a production-grade environment.
            </p>
          </span>
        </section>
        <section id="dialogWeather" ref="dialogWeather" class="mb-5 pb-5 p-5 rounded-4 bg-black-cs text-white">
          <h2 class="pb-5">🌤️ Dialog Weather Web App</h2>
          <span class="text-start">
            <p>
              <span class="fw-bold">
                Technology Stack:
              </span>
              <br>
              PHP, HTML, CSS, OpenWeatherMap API
            </p>
            <p>
              <span class="fw-bold">
                Overview:
              </span>
              <br>
              The Dialog Weather Web App is a fully functional weather forecasting website that I developed to showcase
              my
              skills in web development, API integration, and user interface design. This project allows users to access
              real-time weather updates by simply entering a city name, with data dynamically fetched from the
              OpenWeatherMap API.
            </p>
            <span class="fw-bold">
              Key Features:
            </span>
            <br>
            <ul>
              <li>
                🌡️ Current Weather Conditions: Displays the latest temperature with dynamic weather descriptions (e.g.,
                sunny, cloudy, rainy).
              </li>
              <li>
                ☔ Precipitation: Shows rain or snow levels, giving users an idea of expected wet weather.
              </li>
              <li>
                💧 Humidity Tracking: Real-time humidity levels help assess comfort and health-related weather factors.
              </li>
              <li>
                🌬️ Wind Gusts & Speed: Reports wind gust intensity, useful for outdoor activity planning.
              </li>
              <li>
                🧭 Wind Direction: Visual indicator of wind flow, aiding in better spatial awareness of weather
                patterns.
              </li>
            </ul>
            <span class="fw-bold">
              Technical Highlights:
            </span>
            <br>
            <ul>
              <li>
                Implemented in PHP to handle backend data retrieval and server-side logic.
              </li>
              <li>
                Used HTML & CSS to design a responsive, mobile-friendly UI with clean layout and easy readability.
              </li>
              <li>
                Integrated OpenWeatherMap API for real-time weather data using RESTful requests and JSON parsing.
              </li>
              <li>
                Error handling and user-friendly messages ensure smooth UX even when data is unavailable or inputs are
                incorrect.
              </li>
            </ul>
            <p>
              <span class="fw-bold">
                What I Learned:
              </span>
              <br>
              Through this project, I deepened my understanding of API consumption, asynchronous data handling, and
              front-end/back-end integration. It also enhanced my skills in responsive design and taught me how to
              present complex data in a user-friendly manner.
            </p>
          </span>
        </section>
        <section id="dialogAppMaker" ref="dialogAppMaker" class="mb-5 pb-5 p-5 rounded-4 bg-main-cs">
          <h2 class="pb-5">🛠️ Dialog App Maker – Backend API Development</h2>
          <span class="text-start">
            <p>
              <span class="fw-bold">
                Technology Stack:
              </span>
              <br>
              Java, Spring Framework, SQL, REST APIs
            </p>
            <p>
              <span class="fw-bold">
                Overview:
              </span>
              <br>
              As part of the Dialog App Maker project, I was responsible for developing and maintaining backend APIs
              that powered the web-based application builder. This platform allows users to create and manage custom
              applications through a user-friendly interface. My contributions focused on delivering robust, secure, and
              scalable backend services to support the platform’s dynamic functionality.
            </p>
            <span class="fw-bold">
              Key Features:
            </span>
            <br>
            <ul>
              <li>
                🔗 API Development: Designed and implemented RESTful APIs using Java and the Spring Framework to
                efficiently deliver user-related data to the front-end interface.
              </li>
              <li>
                🗃️ Database Integration: Utilized SQL to handle user data storage, retrieval, and manipulation,
                ensuring consistency and integrity of application states.
              </li>
              <li>
                🔐 Authentication & Validation: Integrated secure access to APIs with proper validation and error
                handling mechanisms to enhance system reliability and user data safety.
              </li>
              <li>
                ♻️ Maintenance & Optimization: Performed continuous debugging, refactoring, and performance tuning of
                existing API endpoints to improve speed and scalability.
              </li>
            </ul>
            <span class="fw-bold">
              Technical Highlights:
            </span>
            <br>
            <ul>
              <li>
                Built modular and maintainable service layers using Spring Boot and MVC architecture.
              </li>
              <li>
                Applied DAO patterns to separate data logic, enhancing code organization and testability.
              </li>
              <li>
                Configured REST endpoints to serve data to a dynamic web front-end, improving responsiveness and
                real-time interactivity.
              </li>
            </ul>
            <p>
              <span class="fw-bold">
                What I Learned:
              </span>
              <br>
              This project enhanced my expertise in enterprise-level backend development and deepened my understanding
              of full-stack communication. I gained practical experience in writing secure and scalable Java code,
              optimizing SQL queries, and working collaboratively in an API-first development workflow.
            </p>
          </span>
        </section>
      </div>
      <div class="col-lg-3 d-none d-lg-block py-5 pt-5 mt-5">
        <nav class="toc sticky-top">
          <ul class="list-unstyled">
            <li v-for="section in tocSections" :key="section.id" :class="{ active: activeSection === section.id }">
              <a href="#" @click.prevent="section.id === 'home' ? goToClientView() : scrollToSection(section.id)"
                :class="{ 'fw-bold': activeSection === section.id }">
                {{ section.title }}
              </a>
              <div class="border pb-5 m-4 mx-auto" style="width: 1px;"></div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SEView",
  data() {
    return {
      tocSections: [
        { id: "home", title: "Home" },
        { id: "intro", title: "Introduction" },
        { id: "dialogWeather", title: "Dialog Weather" },
        { id: "dialogAppMaker", title: "Dialog App Maker" },
      ],
      activeSection: "intro",
    };
  },
  mounted() {
    // Attach scroll event to the content column, not window
    this.$refs.scrollContainer.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll(); // Initialize active section
  },
  beforeDestroy() {
    this.$refs.scrollContainer.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      // Use camelCase for ref lookup
      const refName = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
      const el = this.$refs[refName];
      const container = this.$refs.scrollContainer;
      if (el && container) {
        // Scroll the container so that the section is at the top
        const elTop = el.offsetTop;
        container.scrollTo({
          top: elTop,
          behavior: "smooth"
        });
      }
    },
    goToClientView() {
      this.$emit('navigate-home');
    },
    onScroll() {
      const container = this.$refs.scrollContainer;
      if (!container) return;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      let current = this.tocSections[0].id;
      let minDiff = Infinity;

      for (const section of this.tocSections) {
        const refName = section.id.replace(/-([a-z])/g, g => g[1].toUpperCase());
        const el = this.$refs[refName];
        if (el) {
          // Distance from top of container to top of section
          const diff = Math.abs(el.offsetTop - scrollTop);
          if (diff < minDiff && el.offsetTop - scrollTop < containerHeight - 80) {
            minDiff = diff;
            current = section.id;
          }
        }
      }
      this.activeSection = current;
    },
  },
};
</script>

<style scoped>
.container {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox, Safari 18.2+, Chromium 121+ */
}

.container::-webkit-scrollbar {
  display: none;
  /* Older Safari and Chromium */
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

.toc li.active a {
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
</style>