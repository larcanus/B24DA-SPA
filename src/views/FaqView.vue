<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const open = ref(null)
function toggle(idx) {
  open.value = open.value === idx ? null : idx
}

const faqs = computed(() => [
  {
    q: t('faq.q_install'),
    a: t('faq.a_install'),
  },
  {
    q: t('faq.q_repackager'),
    a: t('faq.a_repackager'),
  },
  {
    q: t('faq.q_voice'),
    a: t('faq.a_voice'),
  },
  {
    q: t('faq.q_privacy'),
    a: t('faq.a_privacy'),
  },
  {
    q: t('faq.q_focus'),
    a: t('faq.a_focus'),
  },
])
</script>

<template>
  <section>
    <h1>{{ t('faq.title') }}</h1>
    <p>{{ t('faq.description') }}</p>
    <div class="faq-list">
      <div
          v-for="(item, idx) in faqs"
          :key="idx"
          class="faq-item"
      >
        <button class="faq-question" @click="toggle(idx)">
          {{ item.q }}
        </button>
        <div
            class="faq-answer"
            v-show="open === idx"
        >
          {{ item.a }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-list {
  margin-top: 2rem;
}
.faq-item {
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.8rem;
}
.faq-question {
  background: none;
  border: none;
  color: var(--accent);
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 0;
}
.faq-answer {
  margin-top: 0.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
  transition: all 0.2s;
}
</style>
