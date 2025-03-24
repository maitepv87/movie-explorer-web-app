import { setMedia, setLoading, setError } from "./mediaSlice";
import { tmdbApi } from "../../../api/tmdbApi";

const apiKey = import.meta.env.VITE_API_KEY;

export const getMedia = (mediaId, mediaType) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const url = `/${mediaType}/${mediaId}?api_key=${apiKey}&language=en-US`;
      const response = await tmdbApi.get(url);

      dispatch(
        setMedia({
          result: response.data,
          mediaType: mediaType,
        })
      );

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(`Error fetching ${mediaType} details`));
      console.error(`Error fetching ${mediaType} details`, error);
    }
  };
};
