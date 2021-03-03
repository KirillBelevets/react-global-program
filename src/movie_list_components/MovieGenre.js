import React from 'react'
import PropTypes from 'prop-types'
import Text from '../common_components/Text'

export default function MovieGenre({genre}) {
    return (
        <div className="movie-genre">
            <Text value={genre}/>
        </div>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}