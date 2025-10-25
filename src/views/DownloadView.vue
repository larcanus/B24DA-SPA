<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('download.title') }}</h1>
    <p>{{ t('download.description') }}</p>
    <div class="downloads">
      <a class="download-btn" href="/files/extension.zip" download>
        {{ t('download.extension_btn') }}
      </a>
      <a class="download-btn" href="/files/bitrix24-repackager.zip" download>
        {{ t('download.repackager_btn') }}
      </a>
    </div>
    <div class="instructions">
      <h2>{{ t('download.repackager_title') }}</h2>
      <ol>
        <li>{{ t('download.repackager_step1') }}</li>
        <li>{{ t('download.repackager_step2') }}</li>
        <li>{{ t('download.repackager_step3') }}</li>
        <li>{{ t('download.repackager_step4') }}</li>
        <li>{{ t('download.repackager_step5') }}</li>
      </ol>
      <p class="note">{{ t('download.repackager_note') }}</p>
    </div>
  </section>
</template>

<style scoped>
.downloads {
  margin-bottom: 2rem;
}
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
.instructions {
  margin-top: 2rem;
}
.note {
  color: var(--text-secondary);
  margin-top: 1rem;
  font-size: 0.95rem;
}
</style>
