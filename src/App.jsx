import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import {Routes,Route} from "react-router-dom";

function App(){

  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

 function searchFilm(searchTerm) {
  setError("");
  setLoading(true);

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&language=tr-TR&page=1`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("API isteği başarısız oldu");
      }

      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    })
    .catch(() => {
      setError("Filmler yüklenirken bir hata oluştu.");
    })
    .finally(() => {
      setLoading(false);
    });
}


 useEffect(() => {
  setLoading(true);
  setError("");
  fetch("https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: "application/json",
    },
  })
    .then((response) => {
      if(!response.ok){
        throw new Error("API isteği başarısız oldu");
      }
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    })
    .catch(()=>{
      setError("Filmler Yüklenirken Bir Hata Oluştu");
    })
    .finally(()=>{
      setLoading(false);
    });
     
}, []);

  return(
    <>
    <HomePage searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFilm={searchFilm}
     movies={movies} loading={loading} error={error} />
    </>
  );
}


export default App;