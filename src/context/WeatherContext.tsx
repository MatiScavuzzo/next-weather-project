import { createContext, useState, useEffect } from 'react';
import { currentConditions, fetcherLocation } from '../services/apiweather';

export const WeatherContext = createContext({});

export const WeatherContextProvider = ({ children }: any) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('')
  const [response, setResponse] = useState([])
  const [hidden, setHidden] = useState(false)
  
  const handleInputClick = () => {
    setHidden(false)
  }
  const handleLocationChange = async (ev:any) => {
    try {
      const data = await fetcherLocation(ev.target.value);
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
    setHidden(false)
  }

  const handleLocationSelect = (citiKey:string) => {
    setSelectedLocation(citiKey)
    setHidden(true)
  }
  return (
    <WeatherContext.Provider value={{
      response,
      hidden,
      selectedLocation,
      handleInputClick,
      handleLocationChange,
      handleLocationSelect,
    }}>
      {children}
    </WeatherContext.Provider>
  );
};
