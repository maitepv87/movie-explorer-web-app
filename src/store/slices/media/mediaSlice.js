import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  media: {},
  mediaType: "",
  loading: false,
  error: null,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMedia: (state, action) => {
      // console.log("STORE setMedia:", action.payload);
      state.media = action.payload.result;
      state.mediaType = action.payload.mediaType;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, setMedia } = mediaSlice.actions;

export default mediaSlice.reducer;
