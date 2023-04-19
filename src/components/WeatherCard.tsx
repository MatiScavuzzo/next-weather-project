import Image from 'next/image';

export const WeatherCard = ({ currentDataInfo }: { currentDataInfo: any }) => {
  return (
    <div className='flex w-full p-2 text-white border-2 rounded-lg border-slate-100'>
      {currentDataInfo.current ? (
        <div className='flex items-center justify-start'>
          <Image
            src={`https:${currentDataInfo.current.condition.icon}`}
            alt={currentDataInfo.current.condition.text}
            width={120}
            height={120}
          />
          <div className='flex flex-col'>
            <span className='text-sm'>
              {currentDataInfo.current.temp_c}° C - Temperatura actual ({currentDataInfo.current.last_updated})
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
            <span className='text-sm'>
              {currentDataInfo.current.uv} - Indice UV
            </span>
            <span className='text-sm'>
              {currentDataInfo.current.condition.text}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
