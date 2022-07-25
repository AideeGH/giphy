import "./App.css";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="menu">
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route path="/*" element={<Navigate to="/login" />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
