import Image from "next/image";

export const ForecastHourCard = ({ forecastDataInfo}: {forecastDataInfo: any}) => {

  return (
    <div id="cardContainer" className={`${forecastDataInfo.current.is_day === 0 ? 'bg-slate-800 text-white' : 'bg-slate-200 text-black'} relative overflow-auto flex items-start justify-center w-4/5 sm:w-full p-2 font-bold rounded-lg shadow-md shadow-red-800`}>
      <div id="card" className='flex flex-col w-full gap-1 p-2 overflow-x-auto sm:flex-row'>
        {forecastDataInfo.forecast.forecastday[0].hour.map((hour:any) => 
        hour.time_epoch >= forecastDataInfo.current.last_updated_epoch ? 
        <div id="forecastHour" key={hour.time} className="flex flex-col items-center justify-center flex-shrink-0 w-full gap-1 p-2 text-xs border border-opacity-50 rounded-lg sm:text-sm sm:w-1/3 border-slate-400">
          <div className='flex items-center justify-around gap-2'>
            <span>{hour.time.split(" ")[1].slice(0, 5)}</span>
            <Image src={`https:${hour.condition.icon}`} alt="weather icon" width={40} height={40} />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <div className='flex items-center justify-between'>
              <div>Temperatura</div>
              <div>{hour.temp_c} °C</div>
            </div>
            <div className='flex items-center justify-between'>
              <div>S. térmica</div>
              <div>{hour.feelslike_c} °C</div>
            </div>
            <div className='flex items-center justify-between'>
              <div>Viento</div>
              <div>{hour.wind_dir} {hour.wind_kph} km/h</div>
            </div>
            <div className='flex items-center justify-between'>
              <div>Ráfagas</div>
              <div>{hour.gust_kph} km/h</div>
            </div>
            <div className='flex items-center justify-between'>
              <div>Humedad</div>
              <div>{hour.humidity} %</div>
            </div>
            <div className='flex items-center justify-between'>
              <div>Nubosidad</div>
              <div>{hour.cloud} %</div>
            </div>
            {hour.is_day === 0 ? null: <div className='flex items-center justify-between'>
              <div>Índice UV</div>
              <div>{hour.uv}</div>
            </div>}
            <div className='flex items-center justify-between'>
              <div>Visibilidad</div>
              <div>{hour.vis_km} km</div>
            </div>
            <div className='flex items-center justify-between'>
              <div>Probabilidad de lluvia</div>
              <div>{hour.chance_of_rain} %</div>
            </div>
          </div>
        </div> : 
        null)}
      </div>
    </div>
  );
};
