import { Loader } from "components/Loader/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieInfo } from "services/getMoviesInfo";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        setLoading(true);
        getMovieInfo(movieId)
            .then(movie => {
                setLoading(false)
                setMovie(movie);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div style={{ 'display': 'flex', 'gap': '8px', 'alignItems': 'center' }}>
                <NavLink 
                    to={backLinkRef.current} 
                    style={{ textDecoration: 'none', color: 'black', border: '2px solid black', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', padding: '4px 8px'}}
                >
                    ← Go back
                </NavLink>
                <h2>Movie Details</h2>
            </div>
            {loading && <Loader />}
            {error && <div>Oops, something went wrong...</div>}
            {!loading && !error && movie && <div style={{ 'display': 'flex', 'gap': '12px', 'borderBottom': '4px dashed grey', 'paddingBottom': '8px', fontWeight: 'bold' }}>
                <img src={`https://image.tmdb.org/t/p/w300/${movie['poster_path']}`} alt={movie.title} width='300px' style={{ 'display': 'block' }} />
                <section>
                    <h2>{movie.title}</h2>
                    <p>User Score: {Math.floor(movie['vote_average'] * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </section>
            </div>}
            <div>
                <h3>Additional information</h3>
                <ul style={{ 'paddingBottom': '12px', 'borderBottom': '4px dotted grey', fontWeight: 'bold' }}>
                    <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                    <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;