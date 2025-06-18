import { useI18n } from '@/hooks'

const LanguageSwitcher = () => {
	const { toggleLanguage, isEnglish } = useI18n()

	return (
		<button
			onClick={toggleLanguage}
			className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
			aria-label="Switch language"
		>
			<svg
				className="w-4 h-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
				/>
			</svg>
			<span>{isEnglish ? 'МОН' : 'ENG'}</span>
		</button>
	)
}

export default LanguageSwitcher
