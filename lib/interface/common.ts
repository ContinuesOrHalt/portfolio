export interface ParamsOrders {
  key: string
  dir: 'desc' | 'asc'
}
export interface ParamsList {
  search?: string
  per_page?: number | string | undefined
  page?: number | string | undefined
  orders?: ParamsOrders[]
  [key: string]: any
}
export interface ResponseList {
  data?: any
  per_page?: number
  page?: number
  total?: number
  current_page?: number[]
  [key: string]: any
}

export type ApiResponseList = (
  params: ParamsList | undefined | null
) => Promise<ResponseList>

export type ApiResponseAny = () => Promise<any>
export type ApiResponseIdAny = (id: string) => Promise<any>
