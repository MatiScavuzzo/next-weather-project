import { HourCard } from "./HourCard";

export const ForecastContainer = ({ forecastData}: {forecastData: any}) => {

  return (
    <div id="forecastContainer" className={`${forecastData.current.is_day === 0 ? 'bg-slate-800 text-white' : 'bg-slate-200 text-black'} relative overflow-auto flex items-start justify-center w-4/5 sm:w-full p-2 font-bold rounded-lg shadow-md shadow-red-800`}>
      <div id="hourCardContainer" className='flex flex-col w-full gap-1 p-2 overflow-x-auto sm:flex-row'>
        <HourCard forecastDataInfo={forecastData} arrPosition={0} />
        <HourCard forecastDataInfo={forecastData} arrPosition={1} />
      </div>
    </div>
  );
};
