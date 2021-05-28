import axios from 'axios'
import {GET_MOVIES, ADD_MOVIE} from "./types"

export const fetchMoviesDetails = () => {
    return async (dispatch) => {
        const {data: {data}} = await axios.get('http://localhost:4000/movies');

        return dispatch(getMovies(data))
    }
}

export const postMovie = (movieData) => {
    return async function (dispatch) {
        const {data} = await axios.post('http://localhost:4000/movies',
            movieData
        )

        return dispatch(addMovie(data))
    }
}

export const saveEditMovie = (saveMovieData) => {
    return async function (dispatch, getState) {
        const responseData = await axios.put('http://localhost:4000/movies',
            saveMovieData
        )

        const editedMovies = getState().movies.movieList.map((movie) => {
            if (movie.id === responseData.data.id) {
                movie = responseData.data
            }
            return movie
        })

        return dispatch(getMovies(editedMovies))
    }
}

export const deleteMovie = (movieToDelete) => {
    return async function (dispatch, getState) {
        await axios.delete(`http://localhost:4000/movies/${movieToDelete.id}`)

        const deletedMovie = getState().movies.movieList.filter((movie) => (
                movie.id !== movieToDelete.id
            )
        )

        return dispatch(getMovies(deletedMovie))
    }
}

export const filterByGenre = (genre) => {
    return async function (dispatch) {
        const {data: {data}} = await axios.get('http://localhost:4000/movies', {params: {filter: genre}})

        return dispatch(getMovies(data))
    }
}

export const sortBy = (sortByValue) => {
    return async function (dispatch) {
        const {data: {data}} = await axios.get('http://localhost:4000/movies', {params: {sortBy: sortByValue, sortOrder: 'desc'}})

        return dispatch(getMovies(data))
    }
}

export const getMoviesBySearch = (searchVal) => {
    return async function (dispatch) {
        const {data: {data}} = await axios.get('http://localhost:4000/movies', {params: {search: searchVal, searchBy: 'title'}})

        return dispatch(getMovies(data))
    }
}

export function getMovies(data) {
    return {
        type: GET_MOVIES,
        payload: data
    }
}

export function addMovie(data) {
    return {
        type: ADD_MOVIE,
        payload: data
    }
}
