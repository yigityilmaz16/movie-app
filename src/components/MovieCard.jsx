import {Link} from "react-router-dom";

function MovieCard({movie}){
    return(
    <Link className="movie-card-link" to={`/movie/${movie.id}`}>
        <div className="movie-card">
         
            <p className="movie-title">{movie.title}</p>
            <p className="movie-meta">{movie.release_date}</p>
            <p className="movie-rating">★ {movie.vote_average.toFixed(1)}</p>
            <p className="movie-poster"> <img
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
