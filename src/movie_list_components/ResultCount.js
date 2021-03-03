import React from 'react'
import PropTypes from 'prop-types'

export default function ResultCount ({amount}) {
    return (
        <div className="movie-count-wrapper">
            <span className="movie-count">{amount}</span>
            movies found
        </div>
    )
}

ResultCount.propTypes = {
    amount: PropTypes.number.isRequired
}