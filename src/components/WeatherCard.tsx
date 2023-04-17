export const WeatherCard = ({ currentDataInfo }: { currentDataInfo: any }) => {
  return (
    <div className='flex w-full p-2 text-white border-2 rounded-lg border-slate-100'>
      {currentDataInfo && currentDataInfo[0]  ? <div className='flex flex-col items-start justify-start'>
        {currentDataInfo[0].WeatherText}
      </div> : null}
    </div>
  )
}