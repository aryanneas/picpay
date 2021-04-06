export interface User {
  id: number
  name: string
  img: string
  username: string
}
export interface TransactionPayload {
  card_number: string
  cvv: number
  expiry_date: string
  destination_user_id: number
  value: number
}

export interface HttpResponseStatus {
  status: string
  success: boolean
}
