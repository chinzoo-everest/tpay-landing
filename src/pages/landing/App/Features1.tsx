import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

//images
// import app2 from '@/assets/images/features/app2.png'
import tpay4 from '@/assets/images/tpay/tpay4.png'

// Import Figma icons
import TakeNowIcon from '@/assets/images/figma/take-now-icon.svg'
import PayLaterIcon from '@/assets/images/figma/pay-later-icon.svg'
import RewardIcon from '@/assets/images/figma/reward-icon.svg'
import FlexibleIcon from '@/assets/images/figma/flexible-icon.svg'

type Feature = {
	icon: string
	title: string
	borderRadius: string
	description: string
	position: string
	alignment: {
		container: string
		text: string
		icon: string
	}
}

const Features1 = () => {
	const { t } = useTranslation()

	const featuresData: Feature[] = [
		{
			icon: TakeNowIcon,
			title: t('features1.takeNow.title'),
			borderRadius:
				'rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[0px]',
			description: t('features1.takeNow.description'),
			position: 'top-left',
			alignment: {
				container: 'items-start justify-start text-left',
				text: 'text-left',
				icon: 'justify-start',
			},
		},
		{
			icon: PayLaterIcon,
			title: t('features1.payLater.title'),
			borderRadius:
				'rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[0px] rounded-br-[200px]',
			description: t('features1.payLater.description'),
			position: 'top-right',
			alignment: {
				container: 'items-end justify-end text-right',
				text: 'text-right',
				icon: 'justify-end',
			},
		},
		{
			icon: RewardIcon,
			title: t('features1.reward.title'),
			borderRadius:
				'rounded-tl-[200px] rounded-tr-[0px] rounded-bl-[200px] rounded-br-[200px]',
			description: t('features1.reward.description'),
			position: 'bottom-left',
			alignment: {
				container: 'items-start justify-end text-left',
				text: 'text-left',
				icon: 'justify-start',
			},
		},
		{
			icon: FlexibleIcon,
			title: t('features1.flexible.title'),
			borderRadius:
				'rounded-tl-[0px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]',
			description: t('features1.flexible.description'),
			position: 'bottom-right',
			alignment: {
				container: 'items-end justify-end text-right',
				text: 'text-right',
				icon: 'justify-end',
			},
		},
	]

	return (
		<section className="py-20 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
			</div>

			<div className="container relative">
				<div className="text-center flex flex-col items-center mb-16">
					<div className="flex gap-2 mb-4">
						<span className="text-sm font-medium px-4 rounded-lg text-primary border-2 border-primary inline-block">
							{t('features1.badge.pleasent')}
						</span>
						<span className="text-sm font-medium px-4 rounded-lg text-primary border-2 border-primary inline-block">
							{t('features1.badge.fast')}
						</span>
						<span className="text-sm font-medium px-4 rounded-lg text-primary border-2 border-primary inline-block">
							{t('features1.badge.simple')}
						</span>
					</div>

					<h3 className="text-xl uppercase md:text-3xl font-bold text-gray-900 mb-6">
						{t('features1.title')}
					</h3>
					<div className="flex mx-auto justify-center px-8 py-1 bg-gradient-to-r from-blue-500 to-blue-800  rounded-full">
						<p className="text-lg  max-w-2xl mx-auto">
							<span className="text-white font-semibold italic">
								{t('features1.subtitle')}{' '}
							</span>
						</p>
					</div>
				</div>

				<div className="grid lg:grid-cols-5 gap-8 items-center">
					{/* Left Image Section */}
					<div className="lg:col-span-2 relative">
						<img
							src={tpay4}
							className="lg:w-full w-3/4 mx-auto drop-shadow-2xl"
							data-aos="zoom-in-right"
							alt="TPay Features"
						/>
					</div>

					{/* Right Features Grid - Flower Layout */}
					<div className="lg:col-span-3 relative">
						{/* Background Gradient Rectangle from Figma */}
						<div className="absolute inset-0 w-full h-full rounded-[100px] bg-gradient-to-r from-[#1272CF] to-[#1917ae] opacity-80 blur-3xl transform scale-95"></div>

						<div className="relative grid grid-cols-2 gap-4 max-w-2xl mx-auto">
							{(featuresData || []).map((item, idx) => {
								return (
									<div
										key={idx}
										className={`group relative ${item.borderRadius} bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15 min-h-[320px] md:min-h-[350px] overflow-hidden`}
										style={{
											backdropFilter: 'blur(30px)',
											WebkitBackdropFilter: 'blur(30px)',
										}}
										data-aos="fade-up"
										data-aos-delay={idx * 100}
									>
										{/* Glass Effect Overlay */}
										<div
											className={`absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-50 ${item.borderRadius}`}
										></div>

										{/* Content Container with Specific Alignment */}
										<div
											className={`relative z-10 h-full justify-end flex flex-col ${item.alignment.container} py-8 px-8 md:px-16`}
										>
											{/* Icon Container */}
											<div
												className={`flex ${item.alignment.icon} mb-4 ${
													idx === 2 || idx === 3 ? 'mt-10' : 'mt-8'
												}`}
											>
												<div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm">
													<img
														src={item.icon}
														alt={item.title}
														className="w-10 h-10 filter drop-shadow-lg"
													/>
												</div>
											</div>

											{/* Title */}
											<h4
												className={`text-lg font-bold text-white mb-3 uppercase tracking-wide drop-shadow-lg ${item.alignment.text}`}
											>
												{item.title}
											</h4>

											{/* Description */}
											<p
												className={`text-white/90 leading-relaxed text-sm drop-shadow-md flex-1 ${item.alignment.text}`}
											>
												{item.description}
											</p>
										</div>

										{/* Position-specific Decorative Elements */}
										{item.position === 'top-left' && (
											<>
												<div className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full blur-sm"></div>
												<div className="absolute top-8 left-8 w-1 h-1 bg-white/20 rounded-full blur-sm"></div>
											</>
										)}
										{item.position === 'top-right' && (
											<>
												<div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full blur-sm"></div>
												<div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full blur-sm"></div>
											</>
										)}
										{item.position === 'bottom-left' && (
											<>
												<div className="absolute bottom-4 left-4 w-3 h-3 bg-white/30 rounded-full blur-sm"></div>
												<div className="absolute bottom-8 left-8 w-1 h-1 bg-white/20 rounded-full blur-sm"></div>
											</>
										)}
										{item.position === 'bottom-right' && (
											<>
												<div className="absolute bottom-4 right-4 w-3 h-3 bg-white/30 rounded-full blur-sm"></div>
												<div className="absolute bottom-8 right-8 w-1 h-1 bg-white/20 rounded-full blur-sm"></div>
											</>
										)}

										{/* Hover Glow Effect */}
										<div
											className={`absolute inset-0 ${item.borderRadius} bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
										></div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features1
