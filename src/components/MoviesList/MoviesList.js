import { useLocation } from "react-router-dom"
import { StyledLink, StyledListItem, StyledMoviesList } from "./MoviesList.styled"
import { Loader } from "components/Loader/Loader";

export const MoviesList = ({movies, loading, error}) => {
    const location = useLocation();

    return (
        <>
            <h2 style={{textAlign: 'center'}}>TRANDING TODAY</h2>
            { loading && <Loader /> }
            { error && <div>Oops, something went wrong...</div> }
            {
                movies &&
                <StyledMoviesList>
                    {movies.map(movie => <StyledListItem key={movie.id}>
                        <StyledLink
                            to={`/movies/${movie.id}`}
                            state={{from: location}}
                        >
                            <img src={`https://image.tmdb.org/t/p/w300/${movie['poster_path']}`} 
                                alt={movie.title}
                            />
                            <p>{movie.title}</p>
                        </StyledLink>
                    </StyledListItem>)}
                </StyledMoviesList>
            }
        </>
    )
}