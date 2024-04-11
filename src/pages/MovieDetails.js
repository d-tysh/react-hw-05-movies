import { Loader } from "components/Loader/Loader";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
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
            {loading && <Loader />}
            {error && <div>Oops, something went wrong...</div>}
            {!loading && !error && movie && <MovieInfo movie={movie} movieId={movieId} backLinkRef={backLinkRef} />}
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;