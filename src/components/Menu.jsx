import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { SearchResults } from "../context/SearchContext";
import { FavContext } from "../context/FavoritesContext";

const Menu = () => {
  const { loggedInUser, logout } = useContext(UserContext);
  const { setSearchResults } = useContext(SearchResults);
  const { clearFav } = useContext(FavContext);
  return (
    <header className="navbar navbar-expand-lg opacity sticky">
      <div className="container-fluid links">
        <div>
          <img src="https://media1.giphy.com/media/2YpTTV69fQsH5BqxSm/giphy.gif" />
          Hello {loggedInUser}
        </div>
        {loggedInUser && (
          <>
            <div>
              <NavLink to="/search" className="links">
                Search
              </NavLink>
            </div>
            <div>
              <NavLink to="/favorites" className="links">
                Favorites
              </NavLink>
            </div>
            <div>
              <NavLink
                onClick={() => {
                  clearFav();
                  setSearchResults([]);
                  logout();
                }}
                className="links"
                to="/login"
              >
                Logout
              </NavLink>
            </div>
          </>
        )}
        {!loggedInUser && (
          <>
            <div>
              <NavLink to="/login" className="links">
                Login
              </NavLink>
            </div>
            <div>
              <NavLink to="/register" className="links">
                Register
              </NavLink>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
export default Menu;
