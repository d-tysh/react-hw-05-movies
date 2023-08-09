const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '376bdebe42e07e1ce735b7444b0a16bb';

export const getMovies = async (moviesType) => {
    return await fetch(`${BASE_URL}/movie/${moviesType}?api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status, response.statusText);
            }

            return response.json();
        })
}

export const getMovieInfo = async (movieId) => {
    return await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }

        return response.json();
    })
}

export const getMovieCast = async (movieId) => {
    return await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }

        return response.json();
    })
}

export const getMovieReviews = async (movieId) => {
    return await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }

        return response.json();
    })
}

export const getMoviesBySearch = async (query) => {
    // search/movie?query=batman&include_adult=false&language=en-US&page=1
    // return await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
    return await fetch(`${BASE_URL}/search/movie?query=${query}}&include_adult=false&page=1&api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status, response.statusText);
        }

        return response.json();
    })
}