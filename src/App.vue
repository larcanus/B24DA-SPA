<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --bg-dark: #18122b;
  --bg: #231942;
  --accent: #9f5fff;
  --text: #fff;
  --text-secondary: #b8b8ff;
}

body {
  background: var(--bg-dark);
  color: var(--text);
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  margin: 0;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  background: var(--bg);
}

main {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(24, 18, 43, 0.95);
  border-radius: 12px;
  box-shadow: 0 2px 16px 0 #0002;
}
a {
  color: var(--accent);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
