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
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FEBA08" d="M17 17h10v10H17z"></path><path fill="#05A6F0" d="M5 17h10v10H5z"></path><path fill="#80BC06" d="M17 5h10v10H17z"></path><path fill="#F25325" d="M5 5h10v10H5z"></path></svg>
        </span>
        {{ t('download.repackager_win_btn') }}
        <span class="btn-info">{{ t('download.repackager_win_info') }}</span>
      </a>
      <a class="download-btn" href="/files/Bitrix24AD-repackager-mac.dmg" download>
        <span class="icon">
          <!-- Apple icon -->
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 16c0 7.728-6.265 14-14 14S2 23.728 2 16C2 8.265 8.265 2 16 2s14 6.265 14 14Z" fill="#283544"></path><path d="M22.562 12.457c-.076.045-1.895.986-1.895 3.07.086 2.38 2.295 3.213 2.333 3.213-.038.045-.334 1.136-1.21 2.28-.694.986-1.466 1.98-2.637 1.98-1.114 0-1.514-.657-2.8-.657-1.381 0-1.772.657-2.829.657-1.171 0-2-1.047-2.733-2.023-.952-1.278-1.761-3.284-1.79-5.21-.02-1.02.19-2.023.724-2.875.752-1.19 2.095-1.997 3.561-2.023 1.124-.036 2.124.719 2.81.719.657 0 1.885-.72 3.275-.72.6.001 2.2.17 3.191 1.59Zm-6.561-1.792c-.2-.932.352-1.864.866-2.458.657-.72 1.695-1.207 2.59-1.207a3.334 3.334 0 0 1-.952 2.511c-.58.72-1.58 1.26-2.504 1.154Z" fill="#fff"></path></svg>
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
