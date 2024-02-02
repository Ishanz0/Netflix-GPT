import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptKey: null,
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    addGptKey: (state, action) => {
      state.gptKey = action.payload;
    },
    removeGptKey: (state) => {
      state.gptKey = null;
    },
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGptMovieResult: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
  addGptKey,
  removeGptKey,
  removeGptMovieResult,
} = gptSlice.actions;

export default gptSlice.reducer;
