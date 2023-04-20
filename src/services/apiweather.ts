export const API_KEY = process.env.API_KEY
export const API_URL = process.env.API_URL


export async function fetcherLocation(location:string) {
  const request = location.length !== 0 && await fetch(`${API_URL}search.json?key=${API_KEY}&q=${location}&lang=es`)
  const response = request && await request.json()
  return response
}

export async function currentConditions(location:string) {
  const request = await fetch(`${API_URL}current.json?key=${API_KEY}&q=${location}&lang=es&aqi=yes&alerts=yes`)
  const response = await request.json()
  return response
}
