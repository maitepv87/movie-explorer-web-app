import { setPeople, setPerson } from './peopleSlice';
import { tmdbApi } from '../../../api/tmdbApi';

const apiKey = 'e8752c25ec72a395c2e9f279e9b4e18f';
const activeObject = 'person';

export const getPeople = () => {
    return async (dispatch, getState) => {
        try {
            const url = `/${activeObject}/popular?api_key=${apiKey}&language=en-US&page=1`;
            const response = await tmdbApi.get(url);
            dispatch(setPeople(response.data.results))
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