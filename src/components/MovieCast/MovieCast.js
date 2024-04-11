import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/getMoviesInfo";
import { CastListStyled } from "./MovieCast.styled";
import FileNotFound from '../../images/file-not-found.jpg';

const MovieCast = () => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        setLoading(true);
        getMovieCast(movieId)
            .then(data => {
                setLoading(false);
                setCast(data.cast);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h3>Cast</h3>
            { loading && <Loader /> }
            { error && <div>Oops, something went wrong...</div> }
            { !loading && !error && cast && <>
                <CastListStyled>
                {
                    cast.map(item => (
                    <li key={item.id}>
                        <img 
                            src={
                                item['profile_path'] 
                                ? `https://image.tmdb.org/t/p/w300/${item['profile_path']}` 
                                : FileNotFound
                            } 
                            alt={item.name} />
                        <div>
                            <p>Character: {item.character}</p>
                            <p><b>{item.name}</b></p>
                        </div>
                    </li>))
                }
            </CastListStyled>
            </> }
        </div>
    )
}

export default MovieCast;