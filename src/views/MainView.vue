<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="main-section">
    <div class="preview">
      <img src="../assets/chat-preview-ru.png" alt="Extension Preview" class="preview-img" />
      <div class="info">
        <h1>{{ t('main.title') }}</h1>
        <p class="lead">{{ t('main.description') }}</p>
      </div>
    </div>

    <div class="about">
      <h2>{{ t('main.what_title') }}</h2>
      <p>{{ t('main.what_text') }}</p>
      <h2>{{ t('main.why_title') }}</h2>
      <p>{{ t('main.why_text') }}</p>
      <h2>{{ t('main.how_title') }}</h2>
      <p>{{ t('main.how_text') }}</p>
    </div>

    <div class="features">
      <h2>{{ t('main.features_title') }}</h2>
      <ul>
        <li>
          <strong>👀 {{ t('main.feature_read_silently_title') }}</strong>
          <br />
          {{ t('main.feature_read_silently_desc') }}
        </li>
        <li>
          <strong>🔍 {{ t('main.feature_quick_search_title') }}</strong>
          <br />
          {{ t('main.feature_quick_search_desc') }}
        </li>
        <li>
          <strong>🎯 {{ t('main.feature_focus_mode_title') }}</strong>
          <br />
          {{ t('main.feature_focus_mode_desc') }}
        </li>
        <li>
          <strong>🎤 {{ t('main.feature_voice_input_title') }}</strong>
          <br />
          {{ t('main.feature_voice_input_desc') }}
        </li>
      </ul>
    </div>

    <div class="updates">
      <h2>{{ t('main.updates') }}</h2>
      <ul>
        <li>v1.2.0 – {{ t('main.changelog_voice') }}</li>
        <li>v1.1.0 – {{ t('main.changelog_focus') }}</li>
        <li>v1.0.0 – {{ t('main.changelog_initial') }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.main-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.preview {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.preview-img {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  box-shadow: 0 2px 16px #0004;
  background: #222;
  object-fit: cover;
}
.info {
  flex: 1;
}
.lead {
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.about, .features, .updates {
  margin-top: 1.5rem;
}
.features ul {
  list-style: none;
  padding: 0;
}
.features li {
  margin-bottom: 1.2rem;
}
.updates ul {
  margin: 0;
  padding-left: 1.2rem;
}
</style>
