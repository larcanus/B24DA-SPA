<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('faq.title') }}</h1>
    <p>{{ t('faq.description') }}</p>
    <ul>
      <li><strong>Q:</strong> How to install the extension?<br><strong>A:</strong> Download and drag it to Chrome extensions page.</li>
      <li><strong>Q:</strong> Where to get updates?<br><strong>A:</strong> Check the main page for the latest news.</li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  margin-top: 1.5rem;
}
li {
  margin-bottom: 1rem;
}
</style>
