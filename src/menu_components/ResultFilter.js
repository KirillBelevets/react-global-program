import React from 'react'

const ResultFilter = () => {
    return (
        <div className="genre-filter text-uppercase text-white display-flex">
            <div className="genre-filter-item genre-filter-item--active">All</div>
            <div className="genre-filter-item">Comedy</div>
            <div className="genre-filter-item">Horror</div>
            <div className="genre-filter-item">Documentary</div>
            <div className="genre-filter-item">Crime</div>
        </div>
    )
}

export default ResultFilter