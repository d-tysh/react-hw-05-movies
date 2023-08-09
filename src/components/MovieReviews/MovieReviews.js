import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/getMoviesInfo";

const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId} = useParams();


    useEffect(() => {
        setLoading(true);

        getMovieReviews(movieId)
            .then(data => {
                setLoading(false);
                setReviews(data.results)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [])

    return (
        <div>
            <h3>Rewiews</h3>
            {loading && <div>Loading...</div>}
            {error && <div>Oops, something went wrong...</div>}
            {!reviews.length && <p>Sorry, no reviews for this movie.</p>}
            { !loading && !error && reviews && <ul>
                {
                    reviews.map(review => <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>)
                }
            </ul> }
        </div>
    )
}

export default MovieReviews;