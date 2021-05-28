import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {useHistory, useParams} from "react-router-dom"

function MovieDetails({movieList}) {
    const [movieDetails, setMovieDetails] = useState({})

    let {movieId} = useParams()
    let history = useHistory()

    const returnToSearch = () => {
        history.push("/")
    }

    useEffect(() => {
        const movie = movieList.find(movie => (
                movie.id === Number(movieId)
            )
        )
        setMovieDetails(movie)
    }, [movieId])

    return (
        <div className="movie-details text-white display-flex">
            <div className="movie-details-image">
                <img src={movieDetails?.poster_path} alt="pic"/>
            </div>
            <div className="movie-details-information-block">
                <div className="movie-details-title">
                    <div className="movie-details-title-card">
                        <span>{movieDetails?.title}</span>
                        <div className="movie-details-genre">{movieDetails?.genres?.join(', ')}</div>
                    </div>
                    <span className="movie-details-title-rating">{movieDetails?.vote_average}</span>
                </div>
                <div className="movie-details-info">
                    <span className="movie-details-year">{movieDetails?.release_date}</span>
                    <span className="movie-details-time">{movieDetails?.runtime}<span> min</span></span>
                </div>
                <div className="movie-details-description">{movieDetails?.overview}</div>
                <div className="movie-details-btn-close">
                    <button onClick={returnToSearch}><i className="search icon"></i>
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
