import { useEffect, useState } from "react";
import { getMovies } from "services/getMoviesInfo";
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        getMovies('popular')
        .then(data => {
            setLoading(false);
            setMovies(data.results.slice(0, 20))
        })
        .catch(() => setError(true));
    }, []);

    return (
        <>
            <MoviesList movies={movies} loading={loading} error={error} />
        </>
    )
};

export default Home;