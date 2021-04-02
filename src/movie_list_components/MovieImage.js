import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './movie.scss'

export default function MovieImage({image, headerState, setHeaderState, movieId}) {
    const img = require(`./movie_images/${image}`)

    return (
        <div onClick={() => setHeaderState(movieId)} className="movie-image" style={{ backgroundImage: `url(${img})` }} />
    )
}

MovieImage.propTypes = {
    image: PropTypes.string.isRequired
}