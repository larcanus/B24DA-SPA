import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      main: 'Main',
      download: 'Download',
      faq: 'FAQ',
      lang: 'RU',
    },
    main: {
      title: 'Welcome to the Chrome Extension Support Site',
      description: 'Preview, guide, and updates for our Chrome extension.',
      updates: 'Updates',
    },
    download: {
      title: 'Download',
      description: 'Get the custom extension and supporting software here.',
    },
    faq: {
      title: 'FAQ',
      description: 'Frequently Asked Questions',
    },
  },
  ru: {
    nav: {
      main: 'Главная',
      download: 'Скачать',
      faq: 'FAQ',
      lang: 'EN',
    },
    main: {
      title: 'Добро пожаловать на сайт поддержки расширения Chrome',
      description: 'Превью, руководство и обновления для нашего расширения.',
      updates: 'Обновления',
    },
    download: {
      title: 'Скачать',
      description: 'Здесь вы можете получить расширение и вспомогательное ПО.',
    },
    faq: {
      title: 'FAQ',
      description: 'Часто задаваемые вопросы',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})

export default i18n