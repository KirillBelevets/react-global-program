import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";

function MovieDetails({headerState, setHeaderState, movieList}) {
    const [currentDetails, setCurrentDetails] = useState({})

    useEffect(() => {
        const movieIndex = movieList.findIndex(movie => {
            return movie.id === headerState
        })

        return setCurrentDetails(movieList[movieIndex])
    }, [headerState])

    return (
        <div className="movie-details text-white display-flex">
            <div className="movie-details-image">
                <img src={currentDetails?.poster_path} alt="pic"/>
            </div>
            <div className="movie-details-information-block">
                <div className="movie-details-title">
                    <span className="movie-details-title-card">{currentDetails?.title}</span>
                    <span>   </span>
                    <span className="movie-details-title-rating">{currentDetails?.vote_average}</span>
                </div>
                <div className="movie-details-genre">{currentDetails?.genres}</div>
                <div className="movie-details-info">
                    <span className="movie-details-year">{currentDetails?.release_date}</span>
                    <span className="movie-details-time">{currentDetails?.runtime}<span> min</span></span>
                </div>
                <div className="movie-details-description">{currentDetails?.overview}</div>
                <div className="movie-details-btn-close">
                    <button onClick={() => setHeaderState()}><i className="search icon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movieList: state.movies.movieList
    }
}

export default connect(mapStateToProps, null)(MovieDetails)
