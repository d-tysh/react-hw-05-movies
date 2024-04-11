import { Loader } from "components/Loader/Loader";
import { StyledLink, StyledListItem, StyledMoviesList } from "components/MoviesList/MoviesList.styled";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <SearchForm searchMovies={searchMovies} updateSearchParams={updateSearchParams} query={query} />
            {loading && <Loader />}
            {error && <div>Oops, something went wrong...</div>}
            {!loading && !error && movies &&
                <StyledMoviesList>
                    {movies.map(movie => <StyledListItem key={movie.id}>
                        <StyledLink to={`/movies/${movie.id}`} state={{from: location}}
                        >
                            <img src={`https://image.tmdb.org/t/p/w300/${movie['poster_path']}`} alt={movie.title}/>
                            <p>{movie.title}</p>
                        </StyledLink>
                    </StyledListItem>)}
                </StyledMoviesList>
            }
        </>
    )
}

export default Movies;