import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isMovie, setIsMovie] = useState(""); // Initialize as an object with a Search array
    const [query, setQuery] = useState([]);
    const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${query}`;

    const get_movie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setIsMovie(data);
        } catch (error) {
            console.log(error.message);
        }
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            get_movie(API_URL);
        }, 800);
        return () => clearTimeout(timer);
    }, [query]);

    return (
        <AppContext.Provider value={{isMovie, query, setQuery}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
