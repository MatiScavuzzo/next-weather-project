import { useState } from "react"
import { SearchBar } from "./SearchBar"

export const Navbar = ({onLocationSelect}:any) => {
  const [response, setResponse] = useState<any>([])
  return(
    <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center w-[99%] p-2 text-2xl font-bold text-black bg-slate-100 rounded-xl'><SearchBar onSelectedLocation={onLocationSelect} onResponse={setResponse} response={response} /></div>
    </div>
  )
}