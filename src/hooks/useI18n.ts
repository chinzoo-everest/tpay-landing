import { useTranslation } from 'react-i18next'

export const useI18n = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	const toggleLanguage = () => {
		const newLang = i18n.language === 'en' ? 'mn' : 'en'
		changeLanguage(newLang)
	}

	const currentLanguage = i18n.language
	const isEnglish = currentLanguage === 'en'
	const isMongolian = currentLanguage === 'mn'

	return {
		t,
		i18n,
		changeLanguage,
		toggleLanguage,
		currentLanguage,
		isEnglish,
		isMongolian,
	}
}

export default useI18n
