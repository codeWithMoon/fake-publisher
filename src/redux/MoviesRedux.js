import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIkey = "db2e4dec";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (item) => {
    const movieText = item;
    return axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${movieText}&type=movie`).then(res => res.data).catch(err => console.log(err));
});

export const fetchShows = createAsyncThunk("shows/fetchShows", async (item) => {
    const showText = item
    return axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${showText}&type=series`).then(res => res.data).catch(err => console.log(err));
});

export const fetchDetails = createAsyncThunk("shows/fetchDetails", async (id) => {
    return await axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&i=${id}&Plot=full`).then(res => res.data).catch(err => console.log(err));
});

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: {},
        shows: {},
        details: {}
    },
    reducers: {
        /*getMovies: (state, { payload }) => {
            state.movies = payload;
        },*/
        clearData: (state) => {
            state.details = {};
        }
    },
    extraReducers: {
        [fetchMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchMovies.fulfilled]: (state, { payload }) => {
            console.log("Feched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchShows.fulfilled]: (state, { payload }) => {
            console.log("Feched Successfully!");
            return { ...state, shows: payload };
        },
        [fetchDetails.fulfilled]: (state, { payload }) => {
            console.log("Feched Successfully!");
            return { ...state, details: payload };
        },
        [fetchDetails.rejected]: () => {
            console.log("Rejected!");
        }
    }
});

export const { clearData } = movieSlice.actions;
export const getAllMovies = state => state.movies.movies;
export const gerAllShows = state => state.movies.shows;
export const getMovieOrShowDetail = state => state.movies.details;
export default movieSlice.reducer;