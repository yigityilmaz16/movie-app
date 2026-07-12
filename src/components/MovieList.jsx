import MovieCard from "./MovieCard"


function MovieList({movies,loading}) {
    if(loading){
        return (
        <p>Filmler yükleniyor...</p>
    );
    }
    if(!loading && movies.length=== 0){
         return (
        <p>Film bulunamadı.</p>
    );
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