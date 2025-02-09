import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
    loading: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovies, movieNames } = action.payload;
      state.gptMovies = gptMovies;
      state.movieNames = movieNames;
    },
    removeGptMovies: (state, action) => {
      state.gptMovies = null;
      state.movieNames = null;
    },
    addLoadingState: (state, action) => {
      state.loading = !state.loading;
    },
  },
});
export const {
  toggleGptSearchView,
  addGptMovieResult,
  removeGptMovies,
  addLoadingState,
} = gptSlice.actions;
export default gptSlice.reducer;
