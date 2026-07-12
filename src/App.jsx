import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App(){

  const [movies, setMovies] = useState([
    {
      id:1,
      title: 'Spider-Man',
      year: 2012,
      rating: 4.8,
      poster: "poster.jpg"
    },
    {
      id:2,
      title: 'SuperMan',
      year: 2015,
      rating: 3.2,
      poster: "poster1.jpg"
    }

  ])

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
    <SearchBar />
    <MovieList movies={movies} />
    </>
  );
}


export default App;