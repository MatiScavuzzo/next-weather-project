import { SearchBar } from "./SearchBar"

export const Navbar = () => {
  return(
    <div className='flex items-center justify-center m-2'>
      <div className='flex items-center justify-center w-[99%] p-2 text-2xl font-bold text-black bg-slate-100 rounded-xl'><SearchBar /></div>
    </div>
  )
}