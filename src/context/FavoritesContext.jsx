import React, {useState, createContext, useCallback} from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider(props){
    const [favorites, setFavorites] = useState([]);

    const add = useCallback((gif) => {
        setFavorites(curr => [...curr, gif]);
    },
    [setFavorites]
    );

    const remove = useCallback((id) => {
        setFavorites(curr=> curr.filter(value=> value.gif_id !== id));

    }, [setFavorites]);

    const clear = useCallback(() => {
        setFavorites([]);
    }, [setFavorites]);


    return (
        <FavoritesContext.Provider value={{favorites, add, remove, clear}}>
            {props.children}
        </FavoritesContext.Provider>
        
    );
}