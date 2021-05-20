import React, {useEffect} from 'react'
import {connect} from "react-redux"
import MovieItem from "./MovieItem"
import ResultCount from "./ResultCount"
import {bindActionCreators} from "redux";
import {fetchMoviesDetails} from '../store/actions/index'

function MovieList({headerState, setHeaderState, fetchMoviesDetails, movieList}) {

    useEffect(() => {
        fetchMoviesDetails();
    }, [])

    return (
        <>
            <ResultCount amount={movieList.length}/>
            <div className="movie-list display-flex">
                {movieList.map((movie) => (
                    <MovieItem
                        movie={movie}
                        key={movie.id}
                        headerState={headerState}
                        setHeaderState={setHeaderState}
                    />
                ))}
            </div>
        </>
    )
}

function mapStateToProps (state) {
    return {
        movieList: state.movies.movieList
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({fetchMoviesDetails: fetchMoviesDetails}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(MovieList)
