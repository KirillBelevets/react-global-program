import React from 'react'
import PropTypes from 'prop-types'

export default function Text ({value}) {
    return (
        <>
            <div>{value}</div>
        </>
    )
}

Text.propTypes = {
    value: PropTypes.string.isRequired
}