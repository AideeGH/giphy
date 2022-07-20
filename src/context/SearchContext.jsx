import React, {useState, createContext} from "react";

export const SearchContext = createContext(null);

export function SearchProvider(props){
    const [searchResults, setSearchresults] = useState([]);



    return (
        <SearchContext.Provider value={{searchResults, setSearchresults}}>
            {props.children}
        </SearchContext.Provider>
        
    );
}