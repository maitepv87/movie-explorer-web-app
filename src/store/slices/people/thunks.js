import { setPeople, setPerson } from './peopleSlice';
import { tmdbApi } from '../../../api/tmdbApi';

const apiKey = import.meta.env.VITE_API_KEY;
const activeObject = 'person';

export const getPeople = (page) => {
    return async (dispatch, getState) => {
        try {
            const url = `/${activeObject}/popular?api_key=${apiKey}&language=en-US&page=${page}`;
            const response = await tmdbApi.get(url);

            // const { people } = getState().people;

            // dispatch(setPeople(response.data.results));
            dispatch(setPeople({
                results: response.data.results,
                page: response.data.page,
                total_pages: response.data.total_pages,
            }));
        } catch (error) {
            console.error('Error fetching people:', error);

        }
    }
}

export const getPerson = (personId) => {
    return async (dispatch, getState) => {
        try {
            const url = `/${activeObject}/${personId}?api_key=${apiKey}&language=en-US`;
            const response = await tmdbApi.get(url);
            dispatch(setPerson(response.data))
        } catch (error) {
            console.error('Error fetching person details:', error);

        }
    }
}