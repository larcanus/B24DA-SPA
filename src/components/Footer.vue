<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function openWebsite() {
  window.open('https://alexrulser.com/', '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <span>© 2025 | {{ t('footer.author') }}: </span>
      <button @click="openWebsite" class="author-link">
        AlexRulSer
      </button>
      <span> | v1.0.2</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 1.5rem 2rem;
  background: var(--bg-dark);
  border-top: 1px solid rgba(159, 95, 255, 0.2);
  text-align: center;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.author-link {
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  font-family: inherit;
  line-height: inherit;
  text-decoration: none;
  transition: opacity 0.2s;
  vertical-align: baseline;
  font-weight: 500;
}

.author-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}
</style>
