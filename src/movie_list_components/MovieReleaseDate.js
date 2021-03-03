import React from 'react'
import PropTypes from 'prop-types'
import Text from "../common_components/Text"
import './movie.scss'

export default function MovieReleaseDate ({year}){
        return (
            <div className="release-date">
                <Text value={year}/>
            </div>
        )
}

MovieReleaseDate.propTypes = {
    year: PropTypes.number.isRequired
}