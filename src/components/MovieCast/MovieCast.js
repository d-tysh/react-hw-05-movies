import { Loader } from "components/Loader/Loader";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h3>Cast</h3>
            { loading && <Loader /> }
            { error && <div>Oops, something went wrong...</div> }
            { !loading && !error && cast && <>
                <ul style={{display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', listStyle: 'none' }}>
                {
                    cast.map(item => (
                    <li key={item.id} 
                        style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', cursor: 'pointer', width: '150px', textAlign: 'center', boxShadow: '2px 5px 5px 2px rgba(0,0,0,0.3)'}}
                    >
                        <img src={item['profile_path'] ? `https://image.tmdb.org/t/p/w300/${item['profile_path']}` : `https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg`} alt={item.name} />
                        <div style={{padding: '4px', height: '100%'}}>
                            <p>Character: {item.character}</p>
                            <p style={{fontWeight: 'bold'}}>{item.name}</p>
                        </div>
                    </li>))
                }
            </ul>
            </> }
        </div>
    )
}

export default MovieCast;