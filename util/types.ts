export interface DataResponse {
	data?: Record<string, unknown> | unknown
	msg: string,
	status: number,
	success?: boolean,
	error?: Error
}