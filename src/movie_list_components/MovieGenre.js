import React from 'react'
import PropTypes from 'prop-types'
import Text from '../common_components/Text'

export default function MovieGenre({genre}) {
    let genreList
        if (genre) {
            genreList = genre.join(', ')
        }

    return (
        <div className="movie-genre">
            <Text value={genreList}/>
        </div>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.array.isRequired
}
