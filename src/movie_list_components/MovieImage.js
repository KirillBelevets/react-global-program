import React from 'react'
import PropTypes from 'prop-types'
import './movie.scss'

export default function MovieImage({image}) {
    const img = require(`./movie_images/${image}`);

    return (
        <div className="movie-image" style={{ backgroundImage: `url(${img})` }}>
        </div>
    )
}

MovieImage.propTypes = {
    image: PropTypes.string.isRequired
}