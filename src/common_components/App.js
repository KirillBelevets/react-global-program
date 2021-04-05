import React, {useEffect, useState} from 'react'
import Header from "../layout_components/Header"
import Menu from '../menu_components/Menu'
import MovieList from "../movie_list_components/MovieList";
import ErrorBoundary from './ErrorBoundary'
import '../global.scss';
import Footer from "../layout_components/Footer";
import movies from '../movie_list_components/movies.json'

export const moviesSortTypes = {
    year: "RELEASE_DATE",
    rating: "RATING"
}

function sortMoviesByAttribute(moviesArray, sortAttribute) {
    return moviesArray.moviesData.slice().sort(function (a, b) {
        if (a[sortAttribute] > b[sortAttribute]) {
            return 1
        } else if (a[sortAttribute] < b[sortAttribute]) {
            return -1
        }
        return 0
    })
}

export default function App() {
    const [headerState, setHeaderState] = useState(null)
    const [sortType, setSortType] = useState(moviesSortTypes.year)
    const [movieList, setMovieList] = useState(sortMoviesByAttribute(movies, "year"))

    useEffect(() => {
        const [type] = Object.keys(moviesSortTypes).filter(type => moviesSortTypes[type] === sortType)
        setMovieList(sortMoviesByAttribute(movies, type))
    }, [sortType])

    return (
        <ErrorBoundary>
            <Header headerState={headerState} setHeaderState={setHeaderState}/>
            <div className="app">
                <Menu setSortType={setSortType}/>
                <MovieList headerState={headerState} setHeaderState={setHeaderState} movieList={movieList}/>
            </div>
            <Footer/>
        </ErrorBoundary>
    )
}
