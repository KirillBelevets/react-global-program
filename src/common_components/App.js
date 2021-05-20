import React, {useState} from 'react'
import Header from "../layout_components/Header"
import Menu from '../menu_components/Menu'
import MovieList from "../movie_list_components/MovieList"
import ErrorBoundary from './ErrorBoundary'
import '../global.scss'
import Footer from "../layout_components/Footer"

export const moviesSortTypes = {
    year: "RELEASE_DATE",
    rating: "RATING"
}

export default function App() {
    const [headerState, setHeaderState] = useState(null)
    const [movieList, setMovieList] = useState([])

    return (
        <ErrorBoundary>
            <Header headerState={headerState} setHeaderState={setHeaderState} movieList={movieList}/>
            <div className="app">
                <Menu/>
                <MovieList headerState={headerState} setHeaderState={setHeaderState} setMovieList={setMovieList}/>
            </div>
            <Footer/>
        </ErrorBoundary>
    )
}
