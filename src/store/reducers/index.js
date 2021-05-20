import {combineReducers} from "redux";
import movieReducer from './movies'

export const allReducers = combineReducers({
    movies: movieReducer
})
