import {fetcherLocation} from '@/services/accuweather'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'


export const SearchBar = ({onSelectedLocation, onResponse, response}:any) => {
  
  const handleLocationChange = async (ev:any) => {
    try {
      const data = await fetcherLocation(ev.target.value);
      onResponse(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocationSelect = (location:string) => {
    onSelectedLocation(location)
  }

  return (
    <div className='relative flex items-center w-full sm:w-3/6 md:w-2/6'>
      <input onChange={handleLocationChange} className='relative w-full p-2 border-2 border-slate-400 rounded-xl' type='search' name='location-search' id='location-search' placeholder={`Buscar localidad`} />
      {response ? <ul className='absolute left-0 w-full bg-white shadow-md top-full rounded-xl'>
        {response.map((city:any) => (
          <li onClick={() => handleLocationSelect(city.Key)} className='p-2 cursor-pointer hover:bg-emerald-400 hover:first-of-type:rounded-t-xl hover:last-of-type:rounded-b-xl' key={city.Key}>
            <p>{city.LocalizedName}, {city.AdministrativeArea.LocalizedName}, {city.Country.LocalizedName}</p>
          </li>
        ))}
      </ul> : ''}
      <FiSearch className='absolute right-2 text-slate-400' />
    </div>
  );
}