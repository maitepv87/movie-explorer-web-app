import { setMovies, setMovie } from './movieSlice';
import { tmdbApi } from '../../../api/tmdbApi';

const apiKey = import.meta.env.VITE_API_KEY;
const activeObject = 'movie';

export const getMovies = () => {
    return async (dispatch, getState) => {
        try {
            const url = `/${activeObject}/popular?api_key=${apiKey}&language=en-US&page=1`;
            const response = await tmdbApi.get(url);
            dispatch(setMovies(response.data.results))
        } catch (error) {
            console.error('Error fetching movies:', error);

        }
    }
}

export const getMovie = (movieId) => {
    return async (dispatch, getState) => {
        try {
            const url = `/${activeObject}/${movieId}?api_key=${apiKey}&language=en-US`;
            const response = await tmdbApi.get(url);
            dispatch(setMovie(response.data))
        } catch (error) {
            console.error('Error fetching movie details:', error);

        }
    }
}