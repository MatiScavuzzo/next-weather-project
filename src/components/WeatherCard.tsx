import Image from "next/image"

export const WeatherCard = ({ currentDataInfo }: { currentDataInfo: any }) => {
  return (
    <div className='flex w-full p-2 text-white border-2 rounded-lg border-slate-100'>
      {currentDataInfo && currentDataInfo[0]  ? <div className='flex flex-col items-start justify-start'>
        {currentDataInfo[0].Temperature.Metric.Value}
        <span className='text-sm'>{currentDataInfo[0].Temperature.Metric.Unit}</span>
        <Image src={`https://developer.accuweather.com/sites/default/files/0${currentDataInfo[0].WeatherIcon}-s.png`} alt={currentDataInfo[0].WeatherText} width={75} height={45} />
        {currentDataInfo[0].WeatherText}
      </div> : null}
    </div>
  )
}