# Internationalization (i18n) Implementation

This project uses `react-i18next` for internationalization with support for English and Mongolian languages.

## Setup

The i18n configuration is located in `src/i18n/i18n.ts` and is automatically imported in `src/main.tsx`.

## Language Files

Translation files are located in `src/i18n/locales/`:

- `en.json` - English translations
- `mn.json` - Mongolian translations (default)

## Usage

### In Components

```tsx
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
	const { t } = useTranslation()

	return (
		<div>
			<h1>{t('hero.title')}</h1>
			<p>{t('hero.description')}</p>
		</div>
	)
}
```

### Language Switching

A language switcher component is available in `src/components/LanguageSwitcher.tsx` and is integrated into the navbar.

### Adding New Translations

1. Add the key-value pairs to both `en.json` and `mn.json`
2. Use the translation key in your component: `{t('your.translation.key')}`

## Features

- Automatic language detection from browser/localStorage
- Language persistence in localStorage
- Fallback to Mongolian if translation is missing
- Dynamic language switching without page reload

## Translation Structure

The translations are organized by component/section:

```json
{
	"common": { "download": "Download" },
	"hero": { "title": "TPay Loan ATM" },
	"features1": { "title": "Features" },
	"features2": { "title": "App Features" },
	"footer": { "contact": "Contact" }
}
```
