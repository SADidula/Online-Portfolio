<template>
  <div id="app">
    <router-view />
    <footer class="p-4" id="footer">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3 text-light">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
      </ul>
      <p class="text-center text-body-secondary">© 2025, Built with 💕 from Didula S.A</p>
    </footer>
  </div>
</template>

<script>
</script>

<style>
:root {
  --bg-main: #F5F6FA;
  --color-primary: #A3BFFA;
  --color-secondary: #FFD6A5;
  --color-accent: #C1FBA4;
  --text-dark: #1C1C1E;
  --text-muted: #6B7280;
  --border-light: #E2E2E2;
  --white: #FFFFFF;
  --black: #353535;
}

* {
  font-family: 'Space Mono', monospace;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.full-height {
  min-height: 100vh;
}

/* Backgrounds */
.bg-main-cs {
  background-color: var(--bg-main) !important;
}

.bg-white-cs {
  background-color: var(--white) !important;
}

.bg-black-cs {
  background-color: var(--black) !important;
}

.bg-primary-cs {
  background-color: var(--color-primary) !important;
}

.bg-secondary-cs {
  background-color: var(--color-secondary) !important;
}

.bg-accent-cs {
  background-color: var(--color-accent) !important;
}

/* Text Colors */
.text-dark-cs {
  color: var(--text-dark) !important;
}

.text-muted-cs {
  color: var(--text-muted) !important;
}

.text-primary-cs {
  color: var(--color-primary) !important;
}

.text-secondary-cs {
  color: var(--color-secondary) !important;
}

.text-accent-cs {
  color: var(--color-accent) !important;
}

/* Borders & Cards */
.border-light-cs {
  border: 1px solid var(--border-light) !important;
}

.card-soft-cs {
  background: var(--white);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

.btn-primary-cs {
  background-color: var(--color-primary) !important;
  color: var(--text-dark) !important;
  border: none;
}

.btn-primary-cs:hover {
  background-color: #89a9f6 !important;
}

.btn-secondary-cs {
  background-color: var(--color-secondary) !important;
  color: var(--text-dark) !important;
  border: none;
}

.btn-secondary-cs:hover {
  background-color: #ffc88a !important;
}

.btn-accent-cs {
  background-color: var(--color-accent) !important;
  color: var(--text-dark) !important;
  border: none;
}

.btn-accent-cs:hover {
  background-color: #a5f58b !important;
}
</style>