import { createI18n } from 'vue-i18n'
import en from './en'
import ru from './ru'

const messages = {
	en,
	ru,
}

const i18n = createI18n({
	legacy: false,
	locale: 'ru',
	fallbackLocale: 'en',
	messages,
})

export default i18n
