<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()

function toggleLocale() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link to="/">{{ t('nav.main') }}</router-link>
      <router-link to="/download">{{ t('nav.download') }}</router-link>
      <router-link to="/faq">{{ t('nav.faq') }}</router-link>
    </div>
    <button class="lang-btn" @click="toggleLocale">{{ t('nav.lang') }}</button>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-dark);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--accent);
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.router-link-active {
  color: var(--accent);
}
.lang-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}
.lang-btn:hover {
  background: #a259e6;
}
</style>
