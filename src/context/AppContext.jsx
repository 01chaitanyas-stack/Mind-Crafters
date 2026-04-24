import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [itinerary, setItinerary] = useState(null);
  
    const [places, setPlaces] = useState([]);
    const [transport, setTransport] = useState([]);
    const [food, setFood] = useState(null);
    const [hotels, setHotels] = useState(null);
    const [busstops, setBusstops] = useState([]);

    // load all data
  useEffect(() => {
    const loadData = async () => {
      try {
        const [pRes, tRes, fRes, hRes, bRes] = await Promise.all([
          fetch('/data/places.json'),
          fetch('/data/transport.json'),
          fetch('/data/food.json'),
          fetch('/data/hotels.json'),
          fetch('/data/busstops.json')
        ]);
        
        setPlaces(await pRes.json());
        setTransport(await tRes.json());
        setFood(await fRes.json());
        setHotels(await hRes.json());
        setBusstops(await bRes.json());
        // console.log("hit")
      } catch (err) {
        console.error("Error loading data", err);
      }
    };
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{
      user, setUser, itinerary, setItinerary,
      places, transport, food, hotels, busstops
    }}>
      {children}
    </AppContext.Provider>
  );
};
