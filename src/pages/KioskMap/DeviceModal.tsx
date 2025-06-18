import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { KioskDevice } from './types'

interface DeviceModalProps {
	isOpen: boolean
	onClose: () => void
	device: KioskDevice | null
}

const DeviceModal = ({ isOpen, onClose, device }: DeviceModalProps) => {
	const { t } = useTranslation()
	if (!device) return null

	const getWorkingHours = () => {
		const workingDays = device.timetables.filter((t) => t.is_work)
		if (workingDays.length === 0) return t('kioskMap.deviceModal.notWorking')

		const firstDay = workingDays[0]
		if (firstDay.is_all_day) return t('kioskMap.deviceModal.noWorkingHours')

		if (firstDay.start_time && firstDay.end_time) {
			return `${firstDay.start_time.slice(0, 5)} - ${firstDay.end_time.slice(
				0,
				5
			)}`
		}

		return t('kioskMap.deviceModal.noInfo')
	}

	const getStatusBadge = () => {
		if (!device.is_active) {
			return (
				<span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
					{t('kioskMap.deviceModal.inactive')}
				</span>
			)
		}
		if (device.is_online) {
			return (
				<span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
					{t('kioskMap.deviceModal.online')}
				</span>
			)
		}
		return (
			<span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
				{t('kioskMap.deviceModal.offline')}
			</span>
		)
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<div className="flex items-start justify-between mb-4">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 pr-4"
									>
										{device.name}
									</Dialog.Title>
									<button
										onClick={onClose}
										className="text-gray-400 hover:text-gray-600 transition-colors"
									>
										<i className="fa-solid fa-times text-lg" />
									</button>
								</div>

								<div className="space-y-4">
									{device.image && (
										<div className="w-full h-32 rounded-lg overflow-hidden bg-gray-100">
											<img
												src={device.image}
												alt={device.name}
												className="w-full h-full object-cover"
											/>
										</div>
									)}

									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<span className="text-sm font-medium text-gray-500">
												{t('kioskMap.deviceModal.status')}
											</span>
											{getStatusBadge()}
										</div>

										<div>
											<span className="text-sm font-medium text-gray-500">
												{t('kioskMap.deviceModal.address')}
											</span>
											<p className="text-sm text-gray-900 mt-1">
												{device.address}
											</p>
										</div>

										<div>
											<span className="text-sm font-medium text-gray-500">
												{t('kioskMap.deviceModal.code')}
											</span>
											<p className="text-sm text-gray-900 mt-1">
												{device.code}
											</p>
										</div>

										<div>
											<span className="text-sm font-medium text-gray-500">
												{t('kioskMap.deviceModal.workingHours')}
											</span>
											<p className="text-sm text-gray-900 mt-1">
												{getWorkingHours()}
											</p>
										</div>

										<div>
											<span className="text-sm font-medium text-gray-500">
												{t('kioskMap.deviceModal.region')}
											</span>
											<p className="text-sm text-gray-900 mt-1">
												{device.device_group_display}
											</p>
										</div>

										<div className="grid grid-cols-2 gap-4 pt-2">
											<div className="text-center p-3 bg-blue-50 rounded-lg">
												<div className="text-xs text-blue-600 font-medium">
													{t('kioskMap.deviceModal.loanPayment')}
												</div>
												<div className="text-sm mt-1">
													{device.can_pay_loan ? (
														<span className="text-green-600">
															✓ {t('kioskMap.deviceModal.available')}
														</span>
													) : (
														<span className="text-red-600">
															✗ {t('kioskMap.deviceModal.unavailable')}
														</span>
													)}
												</div>
											</div>
											<div className="text-center p-3 bg-green-50 rounded-lg">
												<div className="text-xs text-green-600 font-medium">
													{t('kioskMap.deviceModal.loanTaking')}
												</div>
												<div className="text-sm mt-1">
													{device.can_get_loan ? (
														<span className="text-green-600">
															✓ {t('kioskMap.deviceModal.available')}
														</span>
													) : (
														<span className="text-red-600">
															✗ {t('kioskMap.deviceModal.unavailable')}
														</span>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-6 flex justify-end space-x-3">
									<button
										type="button"
										className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
										onClick={onClose}
									>
										{t('kioskMap.deviceModal.close')}
									</button>
									<button
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
										onClick={() => {
											const url = `https://maps.google.com/maps?q=${device.lat},${device.lon}`
											window.open(url, '_blank')
										}}
									>
										{t('kioskMap.deviceModal.getDirections')}
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default DeviceModal
