import { Link, NavLink } from "react-router-dom"
import { AddInfoStyled, InfoStyled, MovieNav } from "./MovieInfo.styled"

export const MovieInfo = ({ movie, movieId, backLinkRef }) => {
    return (
        <>
            <MovieNav>
                <NavLink to={backLinkRef.current}>← Go back</NavLink>
                <h2>Movie Details</h2>
            </MovieNav>
            <InfoStyled style={{}}>
                <img src={`https://image.tmdb.org/t/p/w300/${movie['poster_path']}`} alt={movie.title} />
                <section>
                    <h2>{movie.title}</h2>
                    <p>User Score: {Math.floor(movie['vote_average'] * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </section>
            </InfoStyled>
            <AddInfoStyled>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                    <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
                </ul>
            </AddInfoStyled>
        </>
    )
}