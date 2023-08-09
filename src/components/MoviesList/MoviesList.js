import { useLocation } from "react-router-dom"
import { StyledLink } from "./MoviesList.styled"

export const MoviesList = ({movies, loading, error}) => {
    const location = useLocation();

    return (
        <>
            <h2>Trending today</h2>
            { loading && <div>Loading...</div> }
            { error && <div>Oops, something went wrong...</div> }
            {
                movies && 
                <ul>
                    {movies.map(movie => <li key={movie.id}>
                        <StyledLink
                            to={`/movies/${movie.id}`}
                            state={{from: location}}
                        >
                            {movie.title}
                        </StyledLink>
                    </li>)}
                </ul>
            }
        </>
    )
}