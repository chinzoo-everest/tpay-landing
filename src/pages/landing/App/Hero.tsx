import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// styles
import 'swiper/css'

import backgroundImage from '@/assets/images/figma/background-image.png'
import atmImage from '@/assets/images/figma/atm-image.png'
import titleBackground from '@/assets/images/figma/title-background.png'

const Hero = () => {
	const { t } = useTranslation()

	return (
		<section className="relative min-h-screen overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
			</div>

			{/* Content Container */}
			<div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
				<div className="grid lg:grid-cols-12 grid-cols-1 items-center min-h-[80vh]">
					{/* Left Content */}
					<div className="lg:col-span-7 mb-10 lg:mb-0">
						{/* Hero Title with Image */}
						<div className="relative max-w-4xl mx-auto lg:mx-0">
							<img
								src={titleBackground}
								alt="Title Background"
								className="w-full h-auto object-contain rounded-2xl"
							/>
							{/* <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
								<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white text-center">
									{t('hero.title')}
								</h1>
							</div> */}
						</div>

						{/* Description */}
						<div className="-mt-8 text-center md:mr-10 lg:text-right">
							<p className="text-white/90 leading-relaxed text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto lg:mx-0 font-medium">
								{t('hero.description')}
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row xl:ml-20 sm:items-center justify-center lg:justify-start mt-12 lg:mt-16 gap-8">
							{/* View on Map Button */}
							<Link
								to="/kiosk-map"
								className="inline-flex items-center justify-center py-4 px-8 rounded-xl text-blue-600 bg-white hover:text-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline focus:outline-blue-500/50 transition-all duration-300 text-lg font-bold min-w-[280px]"
							>
								{t('hero.viewOnMap')}
							</Link>

							{/* Play Button and Guide Link */}
							<div className="flex items-center gap-4 justify-center lg:justify-start">
								<div className="relative">
									<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
										<i className="fa-solid fa-play text-blue-600 text-2xl ml-1"></i>
									</div>
								</div>
								<Link
									to="https://youtu.be/Ew3uBTCYhRk"
									className="text-white hover:text-blue-300 transition-colors duration-300 text-lg font-bold"
								>
									{t('hero.howToGuide')}
								</Link>
							</div>
						</div>
					</div>

					{/* Right Content - ATM Image */}
					<div className="lg:col-span-5 flex justify-center lg:justify-end">
						<div className="relative max-w-lg w-full">
							<img
								src={atmImage}
								alt="ATM Machine"
								className="w-full h-auto object-contain drop-shadow-2xl"
							/>

							{/* Floating Testimonials */}
							{/* <div className="hidden xl:block absolute -left-20 top-1/2 transform -translate-y-1/2">
								<div className="max-w-xs">
									<Swiper
										modules={[Autoplay]}
										autoplay={{
											delay: 2500,
											disableOnInteraction: false,
										}}
										spaceBetween={30}
										loop
									>
										<SwiperSlide>
											<div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20">
												<div className="flex items-center gap-2 mb-3">
													<span className="flex gap-1 items-center text-yellow-500">
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
													</span>
												</div>
												<p className="text-gray-700 text-sm leading-relaxed">
													{t('hero.testimonial1')}
												</p>
												<div className="absolute top-3 right-3">
													<i className="fa-solid fa-quote-right text-lg text-blue-600/20" />
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20">
												<div className="flex items-center gap-2 mb-3">
													<span className="flex gap-1 items-center text-yellow-500">
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
														<i className="fa-solid fa-star text-sm" />
													</span>
												</div>
												<p className="text-gray-700 text-sm leading-relaxed">
													{t('hero.testimonial2')}
												</p>
												<div className="absolute top-3 right-3">
													<i className="fa-solid fa-quote-right text-lg text-blue-600/20" />
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div> */}

							{/* Decorative Elements */}
							{/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/20 rounded-full animate-pulse"></div>
							<div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 rounded-full animate-pulse delay-1000"></div> */}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Testimonials */}
			{/* <div className="xl:hidden relative z-10 container mx-auto px-4 pb-20">
				<div className="max-w-md mx-auto">
					<Swiper
						modules={[Autoplay]}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						spaceBetween={20}
						loop
					>
						<SwiperSlide>
							<div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20">
								<div className="flex items-center gap-2 mb-3">
									<span className="flex gap-1 items-center text-yellow-500">
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
									</span>
								</div>
								<p className="text-gray-700 text-sm leading-relaxed">
									{t('hero.testimonial1')}
								</p>
								<div className="absolute top-3 right-3">
									<i className="fa-solid fa-quote-right text-lg text-blue-600/20" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20">
								<div className="flex items-center gap-2 mb-3">
									<span className="flex gap-1 items-center text-yellow-500">
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
										<i className="fa-solid fa-star text-sm" />
									</span>
								</div>
								<p className="text-gray-700 text-sm leading-relaxed">
									{t('hero.testimonial2')}
								</p>
								<div className="absolute top-3 right-3">
									<i className="fa-solid fa-quote-right text-lg text-blue-600/20" />
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div> */}
		</section>
	)
}

export default Hero
