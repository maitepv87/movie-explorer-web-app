import { setMovies, setMovie, setLoading, setError } from "./movieSlice";
import { tmdbApi } from "../../../api/tmdbApi";

const apiKey = import.meta.env.VITE_API_KEY;
const activeObject = "movie";

export const getMovies = (page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const url = `/${activeObject}/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      const response = await tmdbApi.get(url);

      dispatch(
        setMovies({
          results: response.data.results,
          page: response.data.page,
          total_pages: response.data.total_pages,
        })
      );

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError("Error fetching movies"));
      console.error("Error fetching movies:", error);
    }
  };
};

export const getMovie = (movieId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const url = `/${activeObject}/${movieId}?api_key=${apiKey}&language=en-US`;
      const response = await tmdbApi.get(url);
      dispatch(setMovie(response.data));

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError("Error fetching movie details"));
      console.error("Error fetching movie details:", error);
    }
  };
};
