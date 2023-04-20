import { WeatherContext } from '@/context/WeatherContext';
import Link from 'next/link';
import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';

export const SearchBar = () => {
  const {
    handleLocationChange,
    handleInputClick,
    handleLocationSelect,
    hidden,
    response,
  }: any = useContext(WeatherContext);
  return (
    <div className='relative flex items-center w-full sm:w-3/6 md:w-2/6'>
      <input
        onChange={handleLocationChange}
        onClick={handleInputClick}
        className='relative w-full p-2 text-base font-bold border-2 border-slate-400 rounded-xl'
        type='search'
        name='location-search'
        id='location-search'
        placeholder={`Buscar localidad`}
      />
      {response?.length > 0 ? (
        <ul
          className={`${
            hidden ? 'hidden' : ''
          } absolute left-0 w-full bg-white shadow-md top-full rounded-xl`}
        >
          {response.map((city: any) => (
            <Link href={`/${city.name}`} key={city.id}>
              <li
                onClick={() => handleLocationSelect(city.name)}
                className={`p-2 cursor-pointer hover:bg-emerald-400 hover:first-of-type:rounded-t-xl hover:last-of-type:rounded-b-xl`}>
                <p className='text-base font-semibold'>
                  {city.name}, {city.region}, {city.country}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        ''
      )}
      <FiSearch className='absolute right-2 text-slate-400' />
    </div>
  );
};
