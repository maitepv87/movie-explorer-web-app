import { setPeople, setPerson, setLoading, setError } from "./peopleSlice";
import { tmdbApi } from "../../../api/tmdbApi";

const apiKey = import.meta.env.VITE_API_KEY;
const activeObject = "person";

export const getPeople = (page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const url = `/${activeObject}/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      const response = await tmdbApi.get(url);

      dispatch(
        setPeople({
          results: response.data.results,
          page: response.data.page,
          total_pages: response.data.total_pages,
        })
      );

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError("Error fetching people"));
      console.error("Error fetching people:", error);
    }
  };
};

export const getPerson = (personId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const url = `/${activeObject}/${personId}?api_key=${apiKey}&language=en-US`;
      const response = await tmdbApi.get(url);
      dispatch(setPerson(response.data));

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError("Error fetching person details"));
      console.error("Error fetching person details:", error);
    }
  };
};
