import { ForecastHourCard } from '@/components/ForecastHourCard';
import { WeatherCard } from '@/components/WeatherCard';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const City = ({ currentData, forecastData }: any) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 p-2'>
      <WeatherCard currentDataInfo={currentData} />
      <ForecastHourCard forecastDataInfo={forecastData} />
    </div>
  );
};
export async function getServerSideProps({ params }: any) {
  const { city } = params;
  try {
    const request = await fetch(
      `${API_URL}current.json?key=${API_KEY}&q=${city}&lang=es&aqi=no&alerts=yes`
    );
    const currentData = await request.json();
    const requestForecast = await fetch(
      `${API_URL}forecast.json?key=${API_KEY}&q=${city}&days=3&lang=es&aqi=no&alerts=yes`
    );
    const forecastData = await requestForecast.json();
    return {
      props: {
        currentData,
        forecastData
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export default City;
