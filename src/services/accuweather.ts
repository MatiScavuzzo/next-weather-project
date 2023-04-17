export const API_KEY = process.env.API_KEY
export const API_URL = process.env.API_URL


export async function fetcherLocation(location:string) {
  const request = await fetch(`${API_URL}locations/v1/cities/search?apikey=${API_KEY}&q=${location}&language=es-ar&offset=10`)
  const response = await request.json()
  return response
}

export async function currentConditions(locationKey:string) {
  const request = await fetch(`${API_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY}&language=es-ar`)
  const response = await request.json()
  return response
}
