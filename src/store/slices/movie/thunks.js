import { setMovie } from './movieSlice';
import { movieApi } from '../../../api/movieApi';

const apiKey = 'e8752c25ec72a395c2e9f279e9b4e18f';

export const getMovie = (movieId) => {
    return async (dispatch, getState) => {
        try {
            const url = `/movie/${movieId}?api_key=${apiKey}&language=en-US`;
            const response = await movieApi.get(url);
            console.log("API:", response.data);
            dispatch(setMovie(response.data))
        } catch (error) {
            console.error('Error fetching movie details:', error);

        }
    }
}