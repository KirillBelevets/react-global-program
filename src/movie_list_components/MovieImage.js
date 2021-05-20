import React from 'react'
import PropTypes from 'prop-types'
import './movie.scss'

export default function MovieImage({image, setHeaderState, movieId}) {
    return (
        <div onClick={() => setHeaderState(movieId)} className="movie-image"
             style={{backgroundImage: `url(${image})`}}/>
    )
}

MovieImage.propTypes = {
    image: PropTypes.string.isRequired
}
