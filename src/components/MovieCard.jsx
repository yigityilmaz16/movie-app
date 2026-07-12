
function MovieCard({movie}){
    return(
        <>
         
            <p> {movie.title}</p>
            <p> {movie.year}</p>
            <p> {movie.rating}</p>
            <p> {movie.poster}</p>
          
            
        
        </>
    );
}

export default MovieCard;