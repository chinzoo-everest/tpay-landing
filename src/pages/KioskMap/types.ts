export interface Timetable {
	id: number
	weekday_display: string
	weekday: number
	start_time: string | null
	end_time: string | null
	is_all_day: boolean
	is_work: boolean
	device: number
}

export interface KioskDevice {
	id: number
	device_group: number
	name: string
	lat: number
	lon: number
	address: string
	is_online: boolean
	code: string
	is_show: boolean
	is_active: boolean
	image: string | null
	timetables: Timetable[]
	can_pay_loan: boolean
	can_get_loan: boolean
	device_group_display: string
}

export interface MapCenter {
	lat: number
	lng: number
}
