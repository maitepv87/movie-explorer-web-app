import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/movie/movieSlice';
import peopleReducer from './slices/people/peopleSlice'

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        people: peopleReducer,
    },
})