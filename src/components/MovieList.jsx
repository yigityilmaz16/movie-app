import MovieCard from "./MovieCard"


function MovieList({movies,loading,error}) {
    if(loading){
        return (
        <p>Filmler yükleniyor...</p>
    );
    }
   if(error){
         return (
        <p>{error}</p>
    );
    }
    if(movies.length===0){
        return(
            <p>
                Film Bulunamadı.
            </p>
        )
    }
    
    return(
        <>
             {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
        ))}

        </>
    );
    
 
}

export default MovieList;