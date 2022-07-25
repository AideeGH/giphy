import React, { useState, useContext } from "react";
import { searchResults } from "../context/SearchContext";
import { FavContext } from "../context/FavoritesContext";
import useAxios from "../hooks/useAxios";
import { MdFavorite } from "react-icons/md";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("g");
  const [url, setUrl] = useState("");
  // const searchResults = useContext(searchResults)
  const { addFav } = useContext(FavContext);
  const { data } = useAxios(url);
  const [red, setRed] = useState("white");
  return (
    <>
      <div className="container">
        <h1 className="text-center oswald">Search</h1>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              setUrl("&q=" + search + "&rating=" + rating);
              console.log(e);
            }
          }}
          className="input-group input-group-lg"
          placeholder="search"
        ></input>
        <select
          className="form-select"
          type={"form-select"}
          value={rating}
          onChange={(e) => {
            setRating(e.currentTarget.value);
          }}
        >
          <option value={"g"}>g</option>
          <option value={"pg"}>pg</option>
          <option value={"pg-13"}>pg-13</option>
          <option value={"r"}>r</option>
        </select>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setUrl("&q=" + search + "&rating=" + rating);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex just flex-wrap flex-row">
        {data &&
          data.map((gif) => (
            <div className="gif">
              <img alt="gif" src={gif.gifUrl} />
              {
                <MdFavorite
                  onClick={(e) => {
                    e.target.style.color = red;
                    addFav(gif);
                    console.log(gif, e);
                    if (red == "red") {
                      setRed("white");
                    } else if (red == "white") {
                      setRed("red");
                    }
                  }}
                  className="heart"
                ></MdFavorite>
              }
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchPage;
