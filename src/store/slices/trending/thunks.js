import { setTrending, setLoading, setError } from './trendingSlice';
import { tmdbApi } from '../../../api/tmdbApi';

const apiKey = import.meta.env.VITE_API_KEY;

export const getTrending = (category, timeWindow) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));

            const url = `/trending/${category}/${timeWindow}?api_key=${apiKey}&language=en-US`;
            const response = await tmdbApi.get(url);

            dispatch(setTrending({
                category: category,
                results: response.data.results,
                page: response.data.page,
                total_pages: response.data.total_pages,
            }))

            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError('Error fetching trending'));
            console.error('Error fetching trending:', error);

        }
    }
}



