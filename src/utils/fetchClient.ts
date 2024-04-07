import axios from 'axios'

const HOUSES_API_KEY = import.meta.env.VITE_HOUSES_API_KEY
const BASE_URL = 'https://api.intern.d-tt.nl/api/houses'

export type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

async function request<T>(url = '', method: RequestMethod = 'GET', payload = null): Promise<T> {
  try {
    const response = await axios({
      method: method,
      url: BASE_URL + url,
      data: payload,
      headers: {
        'X-Api-Key': HOUSES_API_KEY
      }
    })

    return response.data
  } catch (err) {
    throw new Error()
  }
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, payload: any) => request<T>(url, 'POST', payload),
  patch: <T>(url: string, payload: any) => request<T>(url, 'PATCH', payload),
  delete: (url: string) => request(url, 'DELETE')
}
