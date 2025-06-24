import { ReactNode } from 'react'

export interface MenuItemTypes {
	key: string
	label: string
	isTitle?: boolean
	icon?: ReactNode
	url?: string
	badge?: {
		variant: string
		text: string
	}
	isDivider?: boolean
	parentKey?: string
	target?: string
	children?: MenuItemTypes[]
}
const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'product',
		label: 'Бүтээгдэхүүн',
		isTitle: true,
		children: [
			{
				key: 'atm',
				label: 'TPAY зээлийн АТМ​',
				url: '/',
				parentKey: 'product',
			},
			{
				key: 'woow',
				label: 'WOOW худалдан авалтын зээл',
				url: '/',
				parentKey: 'product',
			},
		],
	},
	{
		key: 'additional',
		label: 'Нэмэлт үйлчилгээ',
		isTitle: true,
		url: '/',
	},
	{
		key: 'merchant',
		label: 'Мерчант',
		isTitle: true,
		parentKey: 'additional',
		children: [
			{
				key: 'merchant-request',
				label: 'Мерчантаар хүсэлт гаргах',
				url: '/',
				parentKey: 'merchant',
			},
			{
				key: 'merchants',
				label: 'Мерчантууд',
				url: '/',
				parentKey: 'merchant',
			},
		],
	},
	{
		key: 'amt-location',
		label: 'АТМ-ийн байршил',
		isTitle: true,
		url: '/kiosk-map',
	},
	{
		key: 'needs',
		label: 'Таньд хэрэгтэй',
		isTitle: true,
		url: '/',
	},
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'product',
		label: 'Бүтээгдэхүүн',
		isTitle: true,
		children: [
			{
				key: 'atm',
				label: 'TPAY зээлийн АТМ​',
				url: '/',
				parentKey: 'product',
			},
			{
				key: 'woow',
				label: 'WOOW худалдан авалтын зээл',
				url: '/',
				parentKey: 'product',
			},
		],
	},
	{
		key: 'additional',
		label: 'Нэмэлт үйлчилгээ',
		url: '/',
	},
	{
		key: 'merchant',
		label: 'Мерчант',
		isTitle: true,
		parentKey: 'additional',
		children: [
			{
				key: 'merchant-request',
				label: 'Мерчантаар хүсэлт гаргах',
				url: '/',
				parentKey: 'merchant',
			},
			{
				key: 'merchants',
				label: 'Мерчантууд',
				url: '/',
				parentKey: 'merchant',
			},
		],
	},
	{
		key: 'amt-location',
		label: 'АТМ-ийн байршил',
		isTitle: true,
		url: '/kiosk-map',
	},
	{
		key: 'needs',
		label: 'Таньд хэрэгтэй',
		isTitle: true,
		url: '/',
	},
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
