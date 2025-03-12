import { setMovies, setMovie } from './movieSlice';
import { movieApi } from '../../../api/movieApi';

const apiKey = 'e8752c25ec72a395c2e9f279e9b4e18f';
const activeObject = 'movie';

export const getMovies = () => {
    return async (dispatch, getState) => {
        try {
            const url = `/${activeObject}/popular?api_key=${apiKey}&language=en-US&page=1`;
            const response = await movieApi.get(url);
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
            const response = await movieApi.get(url);
            dispatch(setMovie(response.data))
        } catch (error) {
            console.error('Error fetching movie details:', error);

        }
    }
}