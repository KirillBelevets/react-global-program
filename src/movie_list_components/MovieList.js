import React, {useEffect} from 'react'
import {connect} from "react-redux"
import MovieItem from "./MovieItem"
import ResultCount from "./ResultCount"
import {bindActionCreators} from "redux"
import {fetchMoviesDetails, getMoviesBySearch} from '../store/actions/index'
import {useLocation, useParams} from "react-router-dom"

function MovieList({fetchMoviesDetails, movieList, getMoviesBySearch}) {
    let {searchValue} = useParams()
    let location = useLocation()

    useEffect(() => {
        if (movieList.length === 0) {
            fetchMoviesDetails()
        }
    }, [])

    useEffect(() => {
        if (location.pathname.includes('search/')) {
            getMoviesBySearch(searchValue)
        }
    }, [location])

    return (
        <>
            <ResultCount amount={movieList.length}/>
            <div className="movie-list display-flex">
                {movieList.map((movie) => (
                    <MovieItem
                        movie={movie}
                        key={movie.id}
                    />
                ))}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        movieList: state.movies.movieList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMoviesDetails: fetchMoviesDetails, getMoviesBySearch: getMoviesBySearch}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
