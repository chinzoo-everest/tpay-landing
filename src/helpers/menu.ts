import {
	HORIZONTAL_MENU_ITEMS,
	MENU_ITEMS,
	MenuItemTypes,
} from '../constants/menu'

const getMenuItems = (t?: any) => {
	if (!t) return MENU_ITEMS

	return MENU_ITEMS.map((item) => ({
		...item,
		label: getMenuLabel(item.key, t),
		children: item.children?.map((child) => ({
			...child,
			label: getMenuLabel(child.key, t),
		})),
	}))
}

const getHorizontalMenuItems = (t?: any) => {
	if (!t) return HORIZONTAL_MENU_ITEMS

	return HORIZONTAL_MENU_ITEMS.map((item) => ({
		...item,
		label: getMenuLabel(item.key, t),
		children: item.children?.map((child) => ({
			...child,
			label: getMenuLabel(child.key, t),
		})),
	}))
}

const getMenuLabel = (key: string, t: any): string => {
	const menuKeys: Record<string, string> = {
		product: t('menu.products'),
		atm: t('menu.atmLoan'),
		woow: t('menu.purchaseLoan'),
		additional: t('menu.additionalServices'),
		merchant: t('menu.merchant'),
		'merchant-request': t('menu.merchantRequest'),
		merchants: t('menu.merchants'),
		'amt-location': t('menu.atmLocations'),
		needs: t('menu.needs'),
	}

	return menuKeys[key] || key
}

const findAllParent = (
	menuItems: MenuItemTypes[],
	menuItem: MenuItemTypes
): string[] => {
	let parents: string[] = []
	const parent = findMenuItem(menuItems, menuItem.parentKey)

	if (parent) {
		parents.push(parent.key)
		if (parent.parentKey) {
			parents = [...parents, ...findAllParent(menuItems, parent)]
		}
	}
	return parents
}

export const getMenuItemFromURL = (
	items: MenuItemTypes | MenuItemTypes[],
	url: string
): MenuItemTypes | undefined => {
	if (items instanceof Array) {
		for (const item of items) {
			const foundItem = getMenuItemFromURL(item, url)
			if (foundItem) {
				return foundItem
			}
		}
	} else {
		if (items.url == url) return items
		if (items.children != null) {
			for (const item of items.children) {
				if (item.url == url) return item
			}
		}
	}
}

const findMenuItem = (
	menuItems: MenuItemTypes[] | undefined,
	menuItemKey: MenuItemTypes['key'] | undefined
): MenuItemTypes | null => {
	if (menuItems && menuItemKey) {
		for (let i = 0; i < menuItems.length; i++) {
			if (menuItems[i].key === menuItemKey) {
				return menuItems[i]
			}
			const found = findMenuItem(menuItems[i].children, menuItemKey)
			if (found) return found
		}
	}
	return null
}

export { getHorizontalMenuItems, findAllParent, findMenuItem, getMenuItems }
