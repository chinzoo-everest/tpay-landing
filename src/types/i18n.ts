// Type definitions for i18n resources
export interface Translation {
	common: {
		download: string
		pleasant: string
		fast: string
		simple: string
	}
	navigation: {
		home: string
		about: string
		services: string
		contact: string
	}
	hero: {
		title: string
		subtitle: string
		description: string
		viewOnMap: string
		howToGuide: string
		testimonial1: string
		testimonial2: string
	}
	features1: {
		badge: string
		title: string
		subtitle: string
		takeNow: {
			title: string
			description: string
		}
		payLater: {
			title: string
			description: string
		}
		reward: {
			title: string
			description: string
		}
		flexible: {
			title: string
			description: string
		}
	}
	features2: {
		badge: string
		title: string
		feature1: {
			title: string
			description: string
		}
		feature2: {
			title: string
			description: string
		}
		feature3: {
			title: string
			description: string
		}
	}
	footer: {
		address: string
		workingHours: string
		workingTime: string
		weekend: string
		products: string
		atmLoan: string
		purchaseLoan: string
		merchant: string
		merchantRequest: string
		merchants: string
		other: string
		additionalServices: string
		atmLocations: string
		forInvestor: string
		contact: string
		copyright: string
	}
}

export type SupportedLanguages = 'en' | 'mn'

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translation'
		resources: {
			translation: Translation
		}
	}
}
