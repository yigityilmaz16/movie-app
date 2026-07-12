import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App(){

  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  function searchFilm(searchTerm){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&language=tr-TR&page=1`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    });
  }


 useEffect(() => {
  fetch("https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    });
}, []);

  return(
    <>
    <Header />
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFilm={searchFilm} />
    <MovieList movies={movies} />
    </>
  );
}


export default App;