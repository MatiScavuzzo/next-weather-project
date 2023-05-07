import Image from 'next/image';
export const WeatherCard = ({ currentDataInfo }: { currentDataInfo: any }) => {
  return (
    <div className={`${currentDataInfo.current.is_day === 0 ? `${currentDataInfo.current.cloud > 30 ? 'cloudyNight' : 'night'} text-white` : `text-black ${currentDataInfo.current.cloud > 30 ? currentDataInfo.current.cloud > 75 ? 'cloudy' : 'cloudyDay' : 'day'}`} relative flex items-center justify-center w-4/5 font-bold rounded-lg shadow-md shadow-red-800`}>
      {currentDataInfo.current ? (
        <div className={`${currentDataInfo.current.is_day === 0 ? 'bg-slate-800' : 'bg-slate-200'} w-full p-2 rounded-lg bg-opacity-30`}>
          <div className='flex flex-col items-center justify-start gap-2'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              className='absolute bottom-0 rounded-full right-50 sm:right-0 opacity-60'
              src={`https:${currentDataInfo.current.condition.icon}`}
              alt={currentDataInfo.current.condition.text}
              width={100}
              height={100}
            />
            <span className='text-md'>
              {currentDataInfo.current.condition.text}
            </span>
          </div>
          <div className='z-10 flex flex-col w-full gap-1 sm:w-3/5'>
            <div className='flex items-end justify-between w-full gap-2'>
              <span className='flex justify-start text-base'>{currentDataInfo.current.temp_c}° C</span> <span className='flex justify-end text-sm font-normal'>Temperatura actual (
              {currentDataInfo.current.last_updated.split(" ")[1].slice(0, 5)})</span>
            </div>
            <div className='flex items-end justify-between w-full gap-2'>
              <span className='flex justify-start text-base'>{currentDataInfo.current.feelslike_c}° C</span> <span className='flex justify-end text-sm font-normal'>Sensación térmica</span>
            </div>
            <div className='flex items-end justify-between w-full gap-2'>
              <span className='flex justify-start text-base'>{currentDataInfo.current.humidity}%</span> <span className='flex justify-end text-sm font-normal'>Humedad</span>
            </div>
            <div className='flex items-end justify-between w-full gap-2'>
              <span className='flex justify-start text-base'>{currentDataInfo.current.vis_km} km</span> <span className='flex justify-end text-sm font-normal'>Visibilidad</span>
            </div>
            <div className='flex items-end justify-between w-full gap-2'>
              <span className='flex justify-start text-base'>{currentDataInfo.current.cloud}%</span>  <span className='flex justify-end text-sm font-normal'>Nubosidad</span>
            </div>
            {currentDataInfo.current.is_day === 0 ? null : 
              <div className='flex items-end justify-between w-full gap-2'>
                <span className='flex justify-start text-base'>{currentDataInfo.current.uv}</span> <span className='flex justify-end text-sm font-normal'>Indice UV</span>
              </div>
            }
          </div>
        </div>
        </div>
      ) : null}
    </div>
  );
};
