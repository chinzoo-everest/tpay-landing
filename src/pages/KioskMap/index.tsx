import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import MapComponent from './MapComponent'
import DeviceModal from './DeviceModal'
import { KioskDevice, MapCenter } from './types'

const KioskMap = () => {
	const { t } = useTranslation()
	const [devices, setDevices] = useState<KioskDevice[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [selectedDevice, setSelectedDevice] = useState<KioskDevice | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Default center coordinates for Ulaanbaatar, Mongolia
	const [mapCenter] = useState<MapCenter>({
		lat: 47.9184,
		lng: 106.9177,
	})

	useEffect(() => {
		const fetchDevices = async () => {
			try {
				setLoading(true)
				const response = await axios.get<KioskDevice[]>(
					'https://monitoring-api.tpay.mn/api/kiosk/device_map/'
				)
				setDevices(response.data)
				setError(null)
			} catch (err) {
				console.error('Error fetching devices:', err)
				setError(t('kioskMap.errorDescription'))
			} finally {
				setLoading(false)
			}
		}

		fetchDevices()
	}, [])

	const handleDeviceClick = (device: KioskDevice) => {
		setSelectedDevice(device)
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
		setSelectedDevice(null)
	}

	const getDeviceStats = () => {
		const total = devices.length
		const online = devices.filter((d) => d.is_online && d.is_active).length
		const offline = total - online
		return { total, online, offline }
	}

	const { total, online, offline } = getDeviceStats()

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="text-center p-8">
					<div className="mb-4">
						<i className="fa-solid fa-exclamation-triangle text-4xl text-red-500" />
					</div>
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						{t('kioskMap.error')}
					</h2>
					<p className="text-gray-600 mb-4">{error}</p>
					<button
						onClick={() => window.location.reload()}
						className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
					>
						{t('kioskMap.retryButton')}
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className="relative h-screen">
			{/* Loading State */}
			{loading && (
				<div className="flex items-center justify-center h-full bg-gray-50">
					<div className="text-center">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
						<p className="text-gray-600">{t('kioskMap.loading')}</p>
					</div>
				</div>
			)}

			{/* Statistics floating widget */}
			{!loading && (
				<div className="absolute top-[100px] left-4 z-10 bg-white rounded-lg shadow-lg p-4">
					<h2 className="text-lg font-semibold text-gray-900 mb-3">
						{t('kioskMap.title')}
					</h2>
					<div className="flex gap-3">
						<div className="text-center bg-blue-50 px-3 py-2 rounded-lg">
							<div className="text-lg font-bold text-blue-600">{total}</div>
							<div className="text-xs text-blue-600">
								{t('kioskMap.statistics.total')}
							</div>
						</div>
						<div className="text-center bg-green-50 px-3 py-2 rounded-lg">
							<div className="text-lg font-bold text-green-600">{online}</div>
							<div className="text-xs text-green-600">
								{t('kioskMap.statistics.online')}
							</div>
						</div>
						<div className="text-center bg-red-50 px-3 py-2 rounded-lg">
							<div className="text-lg font-bold text-red-600">{offline}</div>
							<div className="text-xs text-red-600">
								{t('kioskMap.statistics.offline')}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Map Container */}
			{!loading && (
				<div className="h-[calc(100vh-84px)] pt-[84px]">
					<MapComponent
						devices={devices}
						onDeviceClick={handleDeviceClick}
						mapCenter={mapCenter}
					/>
				</div>
			)}

			{/* Legend */}
			{!loading && (
				<div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 z-10">
					<h3 className="font-semibold text-gray-900 mb-2">
						{t('kioskMap.legend.title')}
					</h3>
					<div className="space-y-2 text-sm">
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 bg-green-500 rounded-full"></div>
							<span>{t('kioskMap.legend.onlineKiosk')}</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 bg-red-500 rounded-full"></div>
							<span>{t('kioskMap.legend.offlineKiosk')}</span>
						</div>
					</div>
				</div>
			)}

			{/* Device Details Modal */}
			<DeviceModal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				device={selectedDevice}
			/>
		</div>
	)
}

export default KioskMap
