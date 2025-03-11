import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/movie/movieSlice';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
    },
})