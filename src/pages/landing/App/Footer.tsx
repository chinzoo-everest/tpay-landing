import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import tpayLogo from '@/assets/images/tpay-horizontal.svg'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className="bg-gray-100 pt-14 pb-5">
			<div className="container">
				<div className="grid grid-cols-5 gap-14">
					<div className="xl:col-span-1 col-span-5">
						<Link to="/">
							<img src={tpayLogo} className="h-12" />
						</Link>
						<p className="text-gray-500/80 mt-5">{t('footer.address')}</p>
						<p className="text-gray-500/80 mt-5">
							{t('footer.workingHours')} <br />
							{t('footer.workingTime')} <br />
							{t('footer.weekend')}
						</p>
					</div>
					<div className="xl:col-span-4 col-span-5 xl:mx-10">
						<div className="flex flex-col lg:flex-row gap-8">
							<div className="flex flex-col lg:flex-row gap-10 flex-wrap justify-between">
								<div>
									<div className="flex flex-col gap-3">
										<h5 className="mb-3">{t('footer.products')}</h5>
										<div className="text-gray-500/80">
											<Link to="/">{t('footer.atmLoan')}</Link>
										</div>
										<div className="text-gray-500/80">
											<Link to="/">{t('footer.purchaseLoan')}</Link>
										</div>
									</div>
								</div>
								<div>
									<div className="flex flex-col gap-3">
										<h5 className="mb-3">{t('footer.merchant')}</h5>
										<div className="text-gray-500/80">
											<Link to="">{t('footer.merchantRequest')}</Link>
										</div>
										<div className="text-gray-500/80">
											<Link to="">{t('footer.merchants')}</Link>
										</div>
									</div>
								</div>
								<div>
									<div className="flex flex-col gap-3">
										<h5 className="mb-3">{t('footer.other')}</h5>
										<div className="text-gray-500/80">
											<Link to="">{t('footer.additionalServices')}</Link>
										</div>
										<div className="text-gray-500/80">
											<Link to="/kiosk-map">{t('footer.atmLocations')}</Link>
										</div>
										<div className="text-gray-500/80">
											<Link to="">{t('footer.forInvestor')}</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-3 lg:ml-auto">
								<div className="flex flex-col gap-3">
									<h5 className="mb-3">{t('footer.contact')}</h5>
									<div className="text-gray-500/80">
										<a href="mailto:info@tlend.mn">info@tlend.mn</a>
									</div>
									<div className="text-gray-500/80">
										<a href="tel:77767776">7776-7776</a>
									</div>
									<div className="flex sm:justify-start gap-7 mt-2">
										<div>
											<Link to="https://www.facebook.com/TpayMNG">
												<svg
													className="w-5 h-5 text-slate-400 transition-all"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													{' '}
													<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />{' '}
												</svg>
											</Link>
										</div>
										{/* <div>
											<Link to="">
												<svg
													className="w-5 h-5 text-slate-400 transition-all"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													{' '}
													<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />{' '}
												</svg>
											</Link>
										</div> */}
										{/* <div>
											<Link to="">
												<svg
													className="w-5 h-5 text-slate-400 transition-all"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													{' '}
													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{' '}
													<rect x={2} y={9} width={4} height={12} />{' '}
													<circle cx={4} cy={4} r={2} />{' '}
												</svg>
											</Link>
										</div> */}
										<div>
											<Link to="">
												<svg
													className="w-5 h-5 text-slate-400 transition-all"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													{' '}
													<rect
														x={2}
														y={2}
														width={20}
														height={20}
														rx={5}
														ry={5}
													/>{' '}
													<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{' '}
													<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />{' '}
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b my-5" />
				<div className="text-center">
					<p className="text-gray-500/80 text-sm">
						{new Date().getFullYear()}
						{t('footer.copyright')}{' '}
						<Link
							to="https://everestsolution.mn/"
							className="text-gray-800 hover:text-primary transition-all"
						>
							Everest Solutions
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
