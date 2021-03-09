import React from 'react'

const ResultFilter = () => {
    return (
        <div className="genre-filter text-uppercase text-white display-flex">
            <div className="genre-filter-item genre-filter-item--active cursor-pointer">All</div>
            <div className="genre-filter-item cursor-pointer">Comedy</div>
            <div className="genre-filter-item cursor-pointer">Horror</div>
            <div className="genre-filter-item cursor-pointer">Documentary</div>
            <div className="genre-filter-item cursor-pointer">Crime</div>
        </div>
    )
}

export default ResultFilter