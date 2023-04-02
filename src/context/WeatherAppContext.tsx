import React, { createContext, useState } from "react";

interface WeatherAppState {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>
  handleLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WeatherAppContext = createContext<WeatherAppState>({
  location: '',
  setLocation: () => {},
  handleLocationChange: () => {}
});

export const WeatherAppProvider: React.FC = (children:any) => {
  const [location, setLocation] = useState('')
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  return (
    <WeatherAppContext.Provider value={{location, setLocation, handleLocationChange}}>
      {children}
    </WeatherAppContext.Provider>
  )
}