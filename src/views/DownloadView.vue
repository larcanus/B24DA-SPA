<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('download.title') }}</h1>
    <p>{{ t('download.description') }}</p>
    <div class="downloads">
      <a class="download-btn" href="/files/Bitrix24AD-extension.zip" download>
        <span class="icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2v10m0 0l-4-4m4 4l4-4M4 16h12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        {{ t('download.extension_btn') }}
      </a>
      <a class="download-btn" href="/files/Bitrix24AD-repackager-win.zip" download>
        <span class="icon">
          <!-- Windows icon -->
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="3" width="8" height="6" fill="#fff"/>
            <rect x="1" y="11" width="8" height="6" fill="#fff"/>
            <rect x="11" y="3" width="8" height="6" fill="#fff"/>
            <rect x="11" y="11" width="8" height="6" fill="#fff"/>
          </svg>
        </span>
        {{ t('download.repackager_win_btn') }}
        <span class="btn-info">{{ t('download.repackager_win_info') }}</span>
      </a>
      <a class="download-btn" href="/files/Bitrix24AD-repackager-mac.dmg" download>
        <span class="icon">
          <!-- Apple icon -->
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.5 11.5c.1 2.1 1.8 2.8 1.8 2.8s-1.5 2.9-3.1 2.9c-1.2 0-1.6-.8-3-.8s-1.8.8-3 .8c-1.6 0-3.1-2.9-3.1-2.9s1.7-.7 1.8-2.8c.1-2.1-1.5-3-1.5-3s1.3-1.2 3.2-1.2c1.1 0 1.7.8 3 .8s1.9-.8 3-.8c1.9 0 3.2 1.2 3.2 1.2s-1.6.9-1.5 3z" fill="#fff"/>
            <path d="M13.5 3.5c0 1.1-.9 2-2 2s-2-.9-2-2" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </span>
        {{ t('download.repackager_mac_btn') }}
        <span class="btn-info">{{ t('download.repackager_mac_info') }}</span>
      </a>
    </div>
    <div class="mac-warning">
      <strong>⚠️ {{ t('download.mac_warning_title') }}</strong>
      <p>{{ t('download.mac_warning_text') }}</p>
      <ol>
        <li>{{ t('download.mac_warning_step1') }}</li>
        <li>{{ t('download.mac_warning_step2') }}</li>
      </ol>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.download-btn {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 0;
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.05rem;
  transition: background 0.2s;
  position: relative;
}
.download-btn:hover {
  background: #a259e6;
}
.icon {
  display: flex;
  align-items: center;
}
.btn-info {
  margin-left: 1rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: normal;
}
.mac-warning {
  background: #2d1b4c;
  color: #ffd6e0;
  border-left: 4px solid #ff5f7e;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  font-size: 1rem;
}
.mac-warning strong {
  color: #ff5f7e;
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
