import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    people: [],
    person: {},
    loading: false,
    error: null,
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeople: (state, action) => {
            state.people = action.payload
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