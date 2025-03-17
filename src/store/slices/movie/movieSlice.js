import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],  // List of movies
    movie: {}, // Details of a specific movie
    loading: false,
    error: null,
    page: 1, // Current page
    totalPages: 1, // Total available pages
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            // console.log("STORE:", action.payload);
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
        },
        setMovie: (state, action) => {
            console.log("STORE setMovie:", action);
            state.movie = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetMoviesState: (state) => {
            state.movies = [];
            state.page = 1;
            state.totalPages = 1;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMovies, setMovie, setLoading, setError, resetMoviesState } = movieSlice.actions

export default movieSlice.reducer