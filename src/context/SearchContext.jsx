import React, { useState } from "react";

export const SearchResults = React.createContext(null);
export function SearchProvider(props) {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchResults.Provider value={{ searchResults, setSearchResults }}>
      {props.children}
    </SearchResults.Provider>
  );
}
