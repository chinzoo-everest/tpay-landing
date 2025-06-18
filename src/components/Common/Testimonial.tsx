import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'
import { Link } from 'react-router-dom'

interface TestimonialProps {
	question: string
	description: string
}
const CommonSlide = ({ question, description }: TestimonialProps) => {
	return (
		<div className="p-10 bg-white">
			<p className="text-slate-800 text-lg">{question}</p>
			<p className="text-slate-800/8 mt-2">{description}</p>
			{/* <div className="flex items-center justify-between mt-5">
				<div className="flex items-center gap-3">
					<div>
						<img src={image} className="w-10 rounded-full" />
					</div>
					<div>
						<h6>{name}</h6>
						<p className="text-sm text-slate-500">{position}</p>
					</div>
				</div>
				<div>
					<span className="flex gap-1 items-center text-yellow-500 text-base">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
					</span>
				</div>
			</div> */}
		</div>
	)
}
const Testimonial = () => {
	const { t } = useTranslation()
	const testimonials = t('testimonial.faqs', { returnObjects: true }) as Array<{
		question: string
		answer: string
	}>

	return (
		<>
			<section
				className="bg-gray-100 relative py-20 overflow-x-hidden"
				data-aos="fade-up"
				data-aos-duration="500"
			>
				<div className="absolute top-0 inset-x-0 hidden sm:block">
					<img src={whiteWave} alt="svg" className="w-full -scale-x-100" />
				</div>
				<div className="container relative">
					<div className="relative z-20">
						<div className="flex items-center justify-between pb-14">
							<div className="flex items-center gap-5">
								{/* <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
									Testimonials
								</span> */}
								<h2 className="md:text-3xl text-xl font-semibold my-5">
									{t('testimonial.title')}
								</h2>
								<Link to="https://www.facebook.com/TpayMNG">
									<button className="px-4 py-2 bg-primary text-white rounded">
										{t('testimonial.startChat')}
									</button>
								</Link>
							</div>
							<div className="flex items-center gap-5">
								<div className="button-prev swiper-custom-prev cursor-pointer">
									<i className="fa-solid fa-arrow-left"></i>
								</div>
								<div className="button-next swiper-custom-next cursor-pointer">
									{' '}
									<i className="fa-solid fa-arrow-right"></i>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="hidden sm:block">
								<div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('@/assets/images/pattern/dot3.svg')]"></div>
								<div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('@/assets/images/pattern/dot3.svg')]"></div>
							</div>

							<div id="swiper_two" className="swiper">
								<Swiper
									modules={[Autoplay, Navigation]}
									autoplay={{
										delay: 2500,
										disableOnInteraction: false,
									}}
									slidesPerView={2}
									spaceBetween={30}
									loop
									navigation={{
										nextEl: '.swiper-custom-next',
										prevEl: '.swiper-custom-prev',
									}}
								>
									{(testimonials || []).map((item, idx) => {
										return (
											<SwiperSlide key={idx}>
												<CommonSlide
													question={item.question}
													description={item.answer}
												/>
											</SwiperSlide>
										)
									})}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Testimonial
