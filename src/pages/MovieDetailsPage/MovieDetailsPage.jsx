import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import MovieDetailsContent from "../../components/MovieDetailsContent/MovieDetailsContent";
import { fetchRequest } from "../../Movies-api";
import css from "./MovieDetailsPage.module.css"
import  GoBack  from "../../components/GoBack/GoBack";
import { useRef, Suspense } from "react";



export default function MovieDetailsPage(){
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const backLinkHref = useRef(location.state ?? "/movies");
    const [error, setError] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
        async function getMovieDetails() {
            try{
                setLoading(true)
                setError(false)
                const res = await fetchRequest(
                    `https://api.themoviedb.org/3/movie/${movieId}`
                  );
                  setMovieDetails(res.data);
            }
            catch(error){
                console.error(error);
                setError(true);
            }
            finally{
                setLoading(false);
            }
        }
        getMovieDetails();
    },[ movieId]);
    return(
        <>
        <GoBack to={backLinkHref.current}> Go back</GoBack>
      {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p>Loading...</p>}
        {movieDetails && <MovieDetailsContent movie={movieDetails} />}
        <ul className={css.list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        </ul>
        <Suspense fallback={<p>Loading details...</p>}>
        <Outlet />
      </Suspense>
        </>
    );
}
