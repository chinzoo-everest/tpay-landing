import { Link, useLocation } from 'react-router-dom'
import { getHorizontalMenuItems, getMenuItems } from '../helpers/menu'
import AppMenu from './Menu'
import { useEffect } from 'react'
import { useThemeContext } from '@/context'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/LanguageSwitcher'

//images
import logoDark from '@/assets/images/logo-dark.png'
import tpayLogo from '@/assets/images/tpay-horizontal.svg'
import { useToggle } from '@/hooks'
import VerticalMenu from './VerticalMenu'
import { OffcanvasLayout } from '@/components'

const Navbar = () => {
	const [isOpenOffcanvas, toggleOffcanvas, openOffcanvas, closeOffcanvas] =
		useToggle(false)
	const { t } = useTranslation()
	const location = useLocation()

	const { settings } = useThemeContext()

	const topNavLight = settings.topbar.theme === 'light'
	const isKioskMapPage = location.pathname === '/kiosk-map'

	useEffect(() => {
		const navbar = document.getElementById('navbar')
		document.addEventListener('scroll', (e) => {
			e.preventDefault()
			if (navbar) {
				if (window.pageYOffset >= 80) navbar.classList.add('nav-sticky')
				else navbar.classList.remove('nav-sticky')
			}
		})
	}, [])

	return (
		<>
			<header
				id="navbar"
				className={`${
					topNavLight ? 'light' : 'dark'
				} fixed top-0 inset-x-0 flex items-center z-40 w-full ${'bg-white'} transition-all py-5`}
			>
				<div className="container">
					<nav className="flex items-center">
						<Link to="/">
							<img src={tpayLogo} className="h-11" alt="Logo" />
						</Link>
						<div className="lg:block hidden ms-auto">
							<AppMenu menuItems={getHorizontalMenuItems(t)} />
						</div>
						<div className="hidden lg:flex items-center ms-3 gap-2">
							<button className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-xs">
								{t('menu.investor')}
							</button>
							<LanguageSwitcher />
						</div>
						<div className="lg:hidden flex items-center ms-auto px-2.5">
							<button type="button" onClick={openOffcanvas}>
								<i className="fa-solid fa-bars text-lg text-gray-500" />
							</button>
						</div>
					</nav>
				</div>
			</header>
			<OffcanvasLayout
				placement="end"
				sizeClassName="w-[347px] bg-white border-s"
				open={isOpenOffcanvas}
				toggleOffcanvas={closeOffcanvas}
			>
				<div className="flex flex-col h-[100vh] divide-y-2 divide-gray-200">
					{/* Mobile Menu Topbar Logo (Header) */}
					<div className="p-6 flex items-center justify-between">
						<Link to="/">
							<img src={tpayLogo} className="h-8" alt="Logo" />
						</Link>
						<div className="flex items-center gap-2">
							<LanguageSwitcher />
							<button
								className="flex items-center px-2"
								onClick={closeOffcanvas}
							>
								<i className="fa-solid fa-xmark text-xl" />
							</button>
						</div>
					</div>
					{/* Mobile Menu Link List */}
					<div className="p-6 overflow-scroll h-full" id="right-menu">
						<VerticalMenu menuItems={getMenuItems(t)} />

						<button className="bg-primary w-full mt-5 text-white p-3 rounded flex items-center justify-center text-sm">
							{t('menu.investor')}
						</button>
					</div>
					{/* Mobile Menu Download Button (Footer) */}
					<div className="p-6 flex items-start justify-center"></div>
				</div>
			</OffcanvasLayout>
		</>
	)
}

export default Navbar
