
export const API_KEY = process.env.API_KEY
export const API_URL = process.env.API_URL


async function prueba(location:any) {
  const request = await fetch(`${API_URL}locations/v1/cities/search?apikey=${API_KEY}&q=${location}&language=es-ar&offset=1`)
  const response = await request.json()
  return console.log(response)
}

export default prueba