<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('download.title') }}</h1>
    <p>{{ t('download.description') }}</p>
    <a class="download-btn" href="/files/extension.zip" download>Download Extension</a>
    <a class="download-btn" href="/files/support-tool.zip" download>Download Support Tool</a>
  </section>
</template>

<style scoped>
.download-btn {
  display: inline-block;
  margin: 1rem 1rem 0 0;
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.download-btn:hover {
  background: #a259e6;
}
</style>
