import React, { useContext } from "react";
import { removeFav, clearFav, FavContext } from "../context/FavoritesContext";
import { UserContext } from "../context/UserContext";
const FavPage = () => {
  const { favorites, clearFav, removeFav } = useContext(FavContext);
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <h1 className="text-center">{loggedInUser}'s Favorites</h1>
      <button
        className="btn btn-secondary"
        onClick={() => {
          clearFav();
        }}
      >
        clear all
      </button>
      {favorites.map((gif) => {
        return <img alt="gif" src={gif.gifUrl}></img>;
      })}
      {console.log(favorites)}
    </>
  );
};
export default FavPage;
