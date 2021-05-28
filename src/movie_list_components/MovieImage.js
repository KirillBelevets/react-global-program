import React from 'react'
import PropTypes from 'prop-types'
import './movie.scss'
import {useHistory} from "react-router-dom"

export default function MovieImage({image, setHeaderState, movieId}) {
    let history = useHistory()

    const showMovieDetailsPage = () => {
        history.push(`/movies/${movieId}`)
    }

    return (
        <div onClick={showMovieDetailsPage} className="movie-image"
             style={{backgroundImage: `url(${image})`}}/>
    )
}

MovieImage.propTypes = {
    image: PropTypes.string.isRequired
}
