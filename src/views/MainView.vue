<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('main.title') }}</h1>
    <p>{{ t('main.description') }}</p>
    <div class="updates">
      <h2>{{ t('main.updates') }}</h2>
      <ul>
        <li>v1.0.0 - Initial release</li>
        <li>v1.1.0 - Minor improvements</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.updates {
  margin-top: 2rem;
}
</style>