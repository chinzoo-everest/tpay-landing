import { PlanItem } from './types'

interface Testimonials {
	question: string
	description: string
}

interface AccordionData {
	title: string
	description: string
}

const testimonials: Testimonials[] = [
	{
		question: 'Яаж зээл авах уу?​',
		description:
			'Та манай АТМ дээр өөрийн иргэний үнэмлэхтэйгээ очоорой.​Хэрэв зааварчилгаа авахыг хүсвэл АТМ-н харилцуурыг ашиглан ажилтантай холбогдох эсвэл ​77767776 руу залгаарай​',
	},
	{
		question: 'Tpay application-д яаж бүртгүүлэх үү?​​',
		description: 'Бүртгүүлэх зааврыг TPayMN хуудсаас аваарай',
	},
	{
		question: 'Миний төлөлт орсон байна уу?​',
		description: 'Та манай апп-г татаснаар төлөлт сунгалтаа харах боломжтой',
	},
	{
		question: 'Надад дахин зээл гарах боломж байна уу​',
		description: 'Таны хугацаа хэтрээгүй бол зээл хэвийн гарна​',
	},
	{
		question: 'Танай зээл хэдээс эхэлдэг вэ?​',
		description:
			'Манай зээл таны мэдээлэл дээр үндэслэж эрхийн тогтоодог байгаа',
	},
	{
		question: 'Хамгийн дээд тал нь хэд хүртэл гардаг вэ?',
		description: '510,000 хүртэл зээл гардаг',
	},
	{
		question: 'Сунгалт хийж болох уу?',
		description: 'Болно. Авсан дүнгээсээ хамаарч сунгалтаа хийдэг байгаа',
	},
]

const FAQContent: AccordionData[] = [
	{
		title: ' Can I use this template for my client?',
		description:
			' Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace. ',
	},
	{
		title: ' Can this theme work with WordPress?',
		description:
			" No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme. ",
	},
	{
		title: ' How do I get help with the theme?',
		description:
			' Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime. ',
	},
	{
		title: ' Will you regularly give updates of TPay ?',
		description:
			' Yes, We will update the TPay regularly. All the future updates would be available without any cost. ',
	},
]

const plans: PlanItem[] = [
	{
		id: 1,
		name: 'Starter',
		price: '49',
		duration: '/ month',
		features: [
			'Up to 600 minutes usage time',
			'Use for personal only',
			'Add up to 10 attendees',
			'Technical support via email',
		],
		isRecommended: false,
	},
	{
		id: 2,
		name: 'Professional',
		price: '99',
		duration: '/ month',
		features: [
			'Up to 6000 minutes usage time',
			'Use for personal or a commercial client',
			'Add up to 100 attendees',
			'Up to 5 teams',
			'Technical support via email',
		],
		isPopular: true,
		isRecommended: true,
	},
	{
		id: 3,
		name: 'Enterprise',
		price: '599',
		duration: '/ month',
		features: [
			'Unlimited usage time',
			'Use for personal or a commercial client',
			'Add Unlimited attendees',
			'24x7 Technical support via phone',
			'Technical support via email',
		],
		isRecommended: false,
	},
]

export { testimonials, plans, FAQContent }
