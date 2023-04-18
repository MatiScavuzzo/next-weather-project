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
              {currentDataInfo.current.temp_c}° C
            </span>
            <span className='text-sm'>
              {currentDataInfo.current.feelslike_c}° C - Sensación térmica
            </span>
            <span className='text-sm'>
              
            </span>
            <span className='text-sm'></span>
            <span className='text-sm'></span>
            {currentDataInfo.current.condition.text}
          </div>
        </div>
      ) : null}
    </div>
  );
};
