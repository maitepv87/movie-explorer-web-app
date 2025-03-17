import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    people: [],  // List of people
    person: {},  // Details of a specific person
    loading: false,
    error: null,
    page: 1, // Current page
    totalPages: 1, // Total available pages
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeople: (state, action) => {
            console.log("STORE setPeople:", action.payload);
            // state.people = action.payload
            state.people = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
        },
        setPerson: (state, action) => {
            console.log("STORE:", action.payload);
            state.person = action.payload
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
export const { setPeople, setPerson, setLoading, setError } = peopleSlice.actions

export default peopleSlice.reducer