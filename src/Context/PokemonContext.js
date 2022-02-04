import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    

    const states = {
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,
        loading,
        setLoading,
    }

    return (
        <PokemonContext.Provider value={ states } displayName='Data' >
            {props.children}
        </PokemonContext.Provider>
    );
}