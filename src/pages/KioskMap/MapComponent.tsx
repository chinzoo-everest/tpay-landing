import { useCallback, useState } from 'react'
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api'
import { useTranslation } from 'react-i18next'
import { KioskDevice, MapCenter } from './types'

interface MapComponentProps {
	devices: KioskDevice[]
	onDeviceClick: (device: KioskDevice) => void
	mapCenter: MapCenter
}

const mapStyles = [
	{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [{ visibility: 'off' }],
	},
	{
		featureType: 'transit',
		elementType: 'labels',
		stylers: [{ visibility: 'off' }],
	},
]

const mapOptions = {
	styles: mapStyles,
	disableDefaultUI: false,
	zoomControl: true,
	streetViewControl: false,
	mapTypeControl: false,
	fullscreenControl: false,
}

const MapComponent = ({
	devices,
	onDeviceClick,
	mapCenter,
}: MapComponentProps) => {
	const { t } = useTranslation()
	const [selectedDevice, setSelectedDevice] = useState<KioskDevice | null>(null)

	const createCustomMarker = (device: KioskDevice) => {
		const isOnline = device.is_online && device.is_active
		const color = isOnline ? '#22c55e' : '#ef4444' // Green for online, red for offline

		return {
			url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
				<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 16 40 16 40S32 24.837 32 16C32 7.163 24.837 0 16 0Z" fill="${color}"/>
					<circle cx="16" cy="16" r="8" fill="white"/>
					<text x="16" y="20" text-anchor="middle" fill="${color}" font-size="10" font-weight="bold">T</text>
					${!isOnline ? `<circle cx="16" cy="16" r="3" fill="${color}"/>` : ''}
				</svg>
			`)}`,
			scaledSize: window.google?.maps
				? new window.google.maps.Size(32, 40)
				: undefined,
			anchor: window.google?.maps
				? new window.google.maps.Point(16, 40)
				: undefined,
		}
	}

	const handleMarkerClick = useCallback((device: KioskDevice) => {
		setSelectedDevice(device)
	}, [])

	const handleInfoWindowClose = useCallback(() => {
		setSelectedDevice(null)
	}, [])

	const handleViewDetails = useCallback(
		(device: KioskDevice) => {
			setSelectedDevice(null)
			onDeviceClick(device)
		},
		[onDeviceClick]
	)

	return (
		<LoadScript googleMapsApiKey="AIzaSyCSbFiKpBMnxJ68aykWuK1KItGYnSRyOIs">
			<GoogleMap
				mapContainerStyle={{ width: '100%', height: '100%' }}
				center={mapCenter}
				zoom={12}
				options={mapOptions}
			>
				{devices
					.filter(
						(device) => device.is_show && device.lat !== 0 && device.lon !== 0
					)
					.map((device) => (
						<Marker
							key={device.id}
							position={{ lat: device.lat, lng: device.lon }}
							icon={createCustomMarker(device)}
							onClick={() => handleMarkerClick(device)}
							title={device.name}
						/>
					))}

				{selectedDevice && (
					<InfoWindow
						position={{ lat: selectedDevice.lat, lng: selectedDevice.lon }}
						onCloseClick={handleInfoWindowClose}
					>
						<div className="p-2 max-w-xs">
							<div className="flex items-start justify-between mb-2">
								<h3 className="font-semibold text-sm text-gray-900">
									{selectedDevice.name}
								</h3>
								<span
									className={`px-2 py-1 text-xs rounded-full ml-2 ${
										selectedDevice.is_online && selectedDevice.is_active
											? 'bg-green-100 text-green-600'
											: 'bg-red-100 text-red-600'
									}`}
								>
									{selectedDevice.is_online && selectedDevice.is_active
										? t('kioskMap.deviceModal.online')
										: t('kioskMap.deviceModal.offline')}
								</span>
							</div>

							<p className="text-xs text-gray-600 mb-2">
								{selectedDevice.address}
							</p>

							<div className="flex justify-between items-center text-xs text-gray-500 mb-3">
								<span>
									{t('kioskMap.deviceModal.code')}: {selectedDevice.code}
								</span>
								<span>{selectedDevice.device_group_display}</span>
							</div>

							{selectedDevice.image && (
								<img
									src={selectedDevice.image}
									alt={selectedDevice.name}
									className="w-full h-20 object-cover rounded mb-2"
								/>
							)}

							<button
								onClick={() => handleViewDetails(selectedDevice)}
								className="w-full bg-primary text-white text-xs py-2 px-3 rounded hover:bg-primary/90 transition-colors"
							>
								{t('kioskMap.infoWindow.viewDetails')}
							</button>
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</LoadScript>
	)
}

export default MapComponent
