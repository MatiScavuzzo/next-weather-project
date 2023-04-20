import { WeatherContext } from '@/context/WeatherContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export const WeatherCard = ({currentData}: any)  => {
  const router = useRouter()
  const { city } = router.query
  return (
    <div className='text-white'>Hola</div>
  );
};

export async function getStaticProps(arg:any) {
  console.log(arg)
  const request = await fetch(`${API_URL}current.json?key=${API_KEY}&q=azul&lang=es&aqi=yes&alerts=yes`)
  const currentData = await request.json()
  return {props: currentData}
}
