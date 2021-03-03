import React from 'react'
import PropTypes from 'prop-types'
import Text from "../common_components/Text";

export default function MovieTitle ({title}) {
    return (
        <div className="movie-title">
            <Text value={title} />
        </div>
    )
}

MovieTitle.propTypes = {
    title: PropTypes.string.isRequired
}