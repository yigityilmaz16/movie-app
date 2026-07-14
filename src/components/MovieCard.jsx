import {Link} from "react-router-dom";

function MovieCard({movie}){
    return(
    <Link to={`/movie/${movie.id}`}>
        <div>
         
            <p> {movie.title}</p>
            <p> {movie.release_date}</p>
            <p> {movie.vote_average}</p>
            <p> <img
                    src={
                            movie.poster_path
                                              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                             : "https://via.placeholder.com/500x750?text=No+Poster"
  }
  alt={movie.title}
/></p>
          
            
        
        </div>
    </Link>
    );
}

export default MovieCard;