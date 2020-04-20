import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// we init with resources
		resources: {
			en: {
				translations: {
					'available times': 'available times',
					timezone:
						'* all the timings listed are in your timezone: {{timezoneName}} ({{gmtOffset}})',
				},
				sun: 'sun',
				mon: 'mon',
				tue: 'tue',
				wed: 'wed',
				thu: 'thu',
				fri: 'fri',
				sat: 'sat',
			},
			zh: {
				translations: {
					'available times': '授課時間',
					'* all the timings listed are in your timezone:':
						'* 時間以',
					showing: '顯示',
					timezone: '* 時間以 {{timezoneName}} ({{gmtOffset}}) 顯示',
					sun: '日',
					mon: '一',
					tue: '二',
					wed: '三',
					thu: '四',
					fri: '五',
					sat: '六',
				},
			},
		},
		fallbackLng: 'en',
		debug: true,

		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
