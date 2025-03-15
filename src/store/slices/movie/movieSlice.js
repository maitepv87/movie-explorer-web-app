import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    movie: {},
    loading: false,
    error: null,
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            // console.log("STORE:", action.payload);
            state.movies = action.payload
            state.error = null;

        },
        setMovie: (state, action) => {
            console.log("STORE setMovie:", action);
            state.movie = action.payload
            state.error = null;

        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMovies, setMovie, setLoading, setError } = movieSlice.actions

export default movieSlice.reducer