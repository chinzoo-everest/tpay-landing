import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'

// styles
import 'swiper/css'

import atm from '@/assets/images/tpay/atm.png'

const Hero = () => {
	const { t } = useTranslation()

	return (
		<section className="pt-36 pb-24 bg-primary/5">
			<div className="container">
				<div className="grid lg:grid-cols-6 grid-cols-1 justify-between items-center gap-6">
					<div className="lg:col-span-3">
						<div className="space-y-6">
							<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
								{t('hero.title')}
								<br />
								<span className="relative inline-block mt-2">
									<span className="relative z-10 text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-extrabold">
										{t('hero.subtitle')}
									</span>
									<svg
										className="absolute bottom-0 left-0 w-full h-3 text-primary/20"
										viewBox="0 0 200 12"
										fill="currentColor"
										preserveAspectRatio="none"
									>
										<path d="M0,6 C50,12 100,0 150,6 C175,9 190,3 200,6 L200,12 L0,12 Z" />
									</svg>
								</span>
							</h1>
						</div>
						<p className="text-slate-600 leading-relaxed text-base sm:text-lg lg:text-xl mt-6 max-w-2xl">
							{t('hero.description')}
						</p>

						<div className="flex flex-col sm:flex-row sm:items-center mt-10 lg:mt-12 gap-4 sm:gap-6">
							<Link
								to=""
								className="inline-flex items-center justify-center py-4 px-8 rounded-lg text-white bg-primary hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 focus:outline focus:outline-primary/50 transition-all duration-300 text-base font-semibold"
							>
								{t('hero.viewOnMap')}
							</Link>
							<Link
								to="https://youtu.be/Ew3uBTCYhRk"
								className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors duration-300"
							>
								<span className="flex items-center justify-center rounded-full w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
									<i className="fa-solid fa-play text-sm"></i>
								</span>
								<p className="font-semibold text-base">
									{t('hero.howToGuide')}
								</p>
							</Link>
						</div>
					</div>
					<div className="lg:col-start-5 lg:col-span-2">
						<div className="relative">
							<img src={atm} alt="img" />

							<div className="hidden lg:block">
								{/* <!-- Swiper --> */}
								<div className="absolute max-w-xs bottom-28 -start-72">
									<div id="swiper_one" className="swiper">
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
												<div className="relative">
													<div className="p-4 rounded-md bg-white relative">
														<div className="flex items-center gap-5">
															<div>
																<p className="">
																	<span className="flex gap-1 items-center text-yellow-500 text-base">
																		<i className="fa-solid fa-star" />
																		<i className="fa-solid fa-star" />
																		<i className="fa-solid fa-star" />
																		<i className="fa-solid fa-star" />
																	</span>
																</p>
																<h2 className="text-sm mt-2 text-slate-400">
																	{t('hero.testimonial1')}
																</h2>
															</div>
														</div>
														<div className="absolute end-1 bottom-0">
															<i className="fa-solid fa-quote-right text-2xl text-orange-500/20" />
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative">
													<div className="p-4 rounded-md bg-white relative">
														<div className="flex items-center gap-5">
															<div>
																<p className="">
																	<span className="flex gap-1 items-center text-yellow-500 text-base">
																		<i className="fa-solid fa-star" />
																		<i className="fa-solid fa-star" />
																		<i className="fa-solid fa-star" />
																		<i className="fa-solid fa-star" />
																	</span>
																</p>
																<h2 className="text-sm mt-2 text-slate-400">
																	{t('hero.testimonial2')}
																</h2>
															</div>
														</div>
														<div className="absolute end-1 bottom-0">
															<i className="fa-solid fa-quote-right text-2xl text-orange-500/20" />
														</div>
													</div>
												</div>
											</SwiperSlide>{' '}
										</Swiper>
									</div>
								</div>
								<div className="hidden sm:block">
									<div className="before:w-24 before:h-24 before:absolute before:-top-3 before:end-2 before:-z-10 before:bg-[url('@/assets/images/pattern/dot3.svg')]"></div>
									<div className="after:w-24 after:h-24 after:absolute after:bottom-10 after:-z-10 after:bg-[url('@/assets/images/pattern/dot3.svg')]"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
