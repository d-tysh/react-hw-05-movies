import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMoviesBySearch } from "services/getMoviesInfo";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query) {
            setLoading(true);
            getMoviesBySearch(query)
                .then(data => {
                    setLoading(false);
                    setMovies(data.results);
                })
                .catch(() => setError(true))
                .finally(() => setLoading(false));
        }
    }, [])

    const updateSearchParams = (e) => {
        setSearchParams(e.target.value ? { query: e.target.value } : {});
    }

    const searchMovies = (e) => {
        e.preventDefault();

        if (!query.length) {
            alert('Enter search query');
            return;
        }

        setLoading(true);
        getMoviesBySearch(query)
            .then(data => {
                if (!data.results.length) {
                    alert(`No data for query '${query}'`);
                }
                setLoading(false);
                setMovies(data.results);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }

    return (
        <>
            <form action="submit" onSubmit={searchMovies} style={{ margin: '20px' }}>
                <input type="text" value={query} onChange={updateSearchParams} />
                <button style={{ cursor: "pointer" }}>Search</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div>Oops, something went wrong...</div>}
            {!loading && !error && movies &&
                <ul>
                    {movies.map(movie => <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                    </li>)}
                </ul>
            }
        </>
    )
}

export default Movies;