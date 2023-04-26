import Image from 'next/image';
export const WeatherCard = ({ currentDataInfo }: { currentDataInfo: any }) => {
  return (
    <div className={`${currentDataInfo.current.is_day === 0 ? `${currentDataInfo.current.cloud > 30 ? 'cloudyNight' : 'night'} text-white` : `text-black ${currentDataInfo.current.cloud > 50 ? 'cloudyDay' : 'day'}`} relative flex items-center justify-center w-4/5 font-bold rounded-lg shadow-md shadow-red-800`}>
      {currentDataInfo.current ? (
        <div className={`${currentDataInfo.current.is_day === 0 ? 'bg-slate-800' : 'bg-slate-200'} w-full p-2 rounded-lg bg-opacity-30`}>
          <div className='flex flex-col items-center justify-start gap-2'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              className='absolute right-0 z-10 rounded-full -bottom-3 opacity-70'
              src={`https:${currentDataInfo.current.condition.icon}`}
              alt={currentDataInfo.current.condition.text}
              width={100}
              height={100}
            />
            <span className='text-md'>
              {currentDataInfo.current.condition.text}
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-sm'>
              {currentDataInfo.current.temp_c}° C - Temperatura actual (
              {currentDataInfo.current.last_updated.split(" ")[1].slice(0, 5)})
            </span>
            <span className='text-sm'>
              {currentDataInfo.current.feelslike_c}° C - Sensación térmica
            </span>
            <span className='text-sm'>
              {currentDataInfo.current.humidity}% - Humedad
            </span>
            <span className='text-sm'>
              {currentDataInfo.current.vis_km} km - Visibilidad
            </span>
            <span className='text-sm'>
              {currentDataInfo.current.cloud}% - Nubosidad
            </span>
            {currentDataInfo.current.is_day === 0 ? null : 
            <span className='text-sm'>
              {currentDataInfo.current.uv} - Indice UV
            </span>}
          </div>
        </div>
        </div>
      ) : null}
    </div>
  );
};
