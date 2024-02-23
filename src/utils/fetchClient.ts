import axios from 'axios'

const API_KEY = 'gVCEYp3twxy01oMGquN7-SWDHK4Bc5XJ'
const BASE_URL = 'https://api.intern.d-tt.nl/api/houses'

export type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

async function request<T>(
  url = '',
  method: RequestMethod = 'GET',
  payload = null
): Promise<T> {
  try {
    const response = await axios({
      method: method,
      url: BASE_URL + url,
      data: payload,
      headers: {
        'X-Api-Key': API_KEY
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
