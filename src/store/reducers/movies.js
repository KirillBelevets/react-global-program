import {GET_MOVIES, ADD_MOVIE} from "../actions/types"

const initialState = {movieList: []}

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movieList: action.payload
            }

        case ADD_MOVIE:
            return {
                ...state,
                movieList: [...state.movieList, action.payload]
            }


        default:
            return state
    }
}
