import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingData: [],
  trendingCategory: "",
  loading: false,
  error: null,
  page: 1, // Current page
  totalPages: 1, // Total available pages
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrending: (state, action) => {
      // console.log("STORE setTrending:", action.payload);
      state.trendingCategory = action.payload.category;
      state.trendingData = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrending, setLoading, setError } = trendingSlice.actions;

export default trendingSlice.reducer;
