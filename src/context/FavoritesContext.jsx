import React, { useState, useCallback } from "react";

export const FavContext = React.createContext(null);
export function FavProvider(props) {
  const [favorites, setFavorites] = useState([]);

  const addFav = useCallback(
    (gifId) => setFavorites((curr) => [gifId, ...curr]),
    [setFavorites]
  );
  const removeFav = useCallback(
    (gifId) => {
      setFavorites((curr) => curr.filter((val) => val.gif_id !== gifId));
    },
    [setFavorites]
  );
  const clearFav = useCallback(() => {
    setFavorites([]);
  }, [setFavorites]);

  return (
    <FavContext.Provider value={{ addFav, removeFav, clearFav, favorites }}>
      {props.children}
    </FavContext.Provider>
  );
}
