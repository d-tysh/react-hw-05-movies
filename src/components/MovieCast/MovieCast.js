import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/getMoviesInfo";

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
    }, [movieId])

    return (
        <div>
            <h3>Cast</h3>
            { loading && <div>Loading...</div> }
            { error && <div>Oops, something went wrong...</div> }
            { !loading && !error && cast && <>
                <ul style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', listStyle: 'none' }}>
                {
                    cast.map(item => <li key={item.id} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: "center", border: '1px solid grey', padding: '4px', cursor: 'pointer'}}>
                        <img src={item['profile_path'] ? `https://image.tmdb.org/t/p/w300/${item['profile_path']}` :  `https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg`} alt={item.name} width='100px' />
                        <p>{item.name}</p>
                        <p>Character: {item.character}</p>
                    </li>)
                }
            </ul>
            </> }
        </div>
    )
}

export default MovieCast;