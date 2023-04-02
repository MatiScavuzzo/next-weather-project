import { WeatherAppContext } from '@/context/WeatherAppContext'
import { useContext } from 'react'
import { FiSearch } from 'react-icons/fi'

export const SearchBar = () => {
  const { handleLocationChange } = useContext(WeatherAppContext)

  return (
    <div className='relative flex items-center w-full sm:w-3/6 md:w-2/6'>
      <input onChange={handleLocationChange} className='w-full p-2 border-2 border-slate-400 rounded-xl' type='search' name='location-search' id='location-search' placeholder={`Buscar localidad`} />
      <FiSearch className='absolute right-2 text-slate-400' />
    </div>
  )
}