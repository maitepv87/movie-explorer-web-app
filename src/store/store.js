import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie/movieSlice";
import peopleReducer from "./slices/people/peopleSlice";
import trendingReducer from "./slices/trending/trendingSlice";
import mediaReducer from "./slices/media/mediaSlice";


export const store = configureStore({
  reducer: {
    movie: movieReducer,
    people: peopleReducer,
    trending: trendingReducer,
    media: mediaReducer,
  },
});
