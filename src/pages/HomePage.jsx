import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import {Routes,Route} from "react-router-dom";

function HomePage({searchTerm, setSearchTerm, searchFilm, movies,loading,error}){
    return(
    <>
    <Header />
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFilm={searchFilm} />
    <MovieList movies={movies} loading={loading} error={error}  />
    </>
  );
}