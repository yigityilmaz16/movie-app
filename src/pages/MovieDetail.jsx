import { useParams, Link } from "react-router-dom";
import {useState,useEffect} from "react";

function MovieDetail() {
    const {id}= useParams();
    const[movie,setMovie]= useState(null);
    const[loading,setLoading] = useState(false);  
    const [error, setError] = useState("");  
    useEffect(()=>{
      setError("");
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
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
      setMovie(data);
    })
    .catch(()=>{
      setError("Filmler Yüklenirken Bir Hata Oluştu");
    })
    .finally(()=>{
      setLoading(false);
    }); 
    }, [id])
  
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
    if(!movie){
        return(
            <p>
                Film Bulunamadı.
            </p>
        )
    }
    
  return (
    <div className="movie-detail">
    {movie.poster_path ? (
    <img className="detail-poster"
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    />
) : (
  <p>Poster bulunamadı.</p>
)}
    <div className="detail-content">
    <h1>{movie.title}</h1>
    <p className="detail-meta">{movie.release_date} <span>★ {movie.vote_average.toFixed(1)}</span></p>
    <p className="detail-overview">{movie.overview}</p>
    <Link className="back-link" to="/">← Ana Sayfa</Link>
    </div>
    </div>
  );
}

export default MovieDetail;
