import { Link } from 'react-router-dom'
import { features2 } from './data'
import { useTranslation } from 'react-i18next'

import google from '@/assets/images/buttons/google.png'
import store from '@/assets/images/buttons/store.png'

const Features2 = () => {
	const { t } = useTranslation()

	const featuresData = [
		{
			...features2[0],
			title: t('features2.feature1.title'),
			description: t('features2.feature1.description'),
		},
		{
			...features2[1],
			title: t('features2.feature2.title'),
			description: t('features2.feature2.description'),
		},
		{
			...features2[2],
			title: t('features2.feature3.title'),
			description: t('features2.feature3.description'),
		},
	]

	return (
		<section className="py-20">
			<div className="container">
				<div className="text-center">
					<span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
						{t('features2.badge')}
					</span>
					<h2 className="md:text-3xl text-xl font-semibold my-5">
						{t('features2.title')}
					</h2>
					{/* <p className="text-slate-500">
						Start working with <span className="text-primary">Prompt</span> to
						showcase your app to thousands of people.
					</p> */}
					<div className="flex flex-wrap items-center justify-center gap-4 mb-10">
						<Link to="https://play.google.com/store/apps/details?id=mn.everestsolution.tpay">
							<img src={google} className="w-48" />
						</Link>
						<Link to="https://apps.apple.com/mn/app/tpaymn/id6741140542">
							<img src={store} className="w-48" />
						</Link>
					</div>
				</div>
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
					{(featuresData || []).map((item, idx) => {
						return (
							<div
								key={idx}
								className="text-center relative"
								data-aos="fade-up"
								data-aos-duration={300}
							>
								<h3 className="text-xl">{item.title}</h3>
								<p className="mt-3">{item.description}</p>
								<div className="pt-5">
									<img src={item.image} />
								</div>
								<div
									className={`absolute h-3 w-3 rounded-full ${item.shapes[0]}`}
								/>
								<div
									className={`absolute h-3 w-3 rounded-full ${item.shapes[1]}`}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Features2
