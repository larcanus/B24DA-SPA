<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showEmail = ref(false)

function toggleEmail() {
  showEmail.value = !showEmail.value
}
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <span>© 2025 | {{ t('footer.author') }}: AlexRulSer | v1.0.2</span>
      <button v-if="!showEmail" @click="toggleEmail" class="contact-link">
        {{ t('footer.contact') }}
      </button>
      <template v-else>
        <span class="email">alex.rulser@gmail.com</span>
        <button @click="toggleEmail" class="contact-link">
          {{ t('footer.hide') }}
        </button>
      </template>
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
  gap: 0.5rem;
  flex-wrap: wrap;
}

.contact-link {
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
}

.contact-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.email {
  color: var(--accent);
  font-weight: 500;
}
</style>
