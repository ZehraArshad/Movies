import { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
//2e5a8bf0

const API_URL = "http://www.omdbapi.com?apikey=2e5a8bf0";

const App = () => {
  //async means it takes time
  // empty string kun k search mein string jaigy
  const [searchTerm, setSearchTerm] = useState('')

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          
        </div>
      )}
    </div>
  );
};
export default App;
