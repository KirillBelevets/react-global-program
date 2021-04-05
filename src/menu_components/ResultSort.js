import React from 'react'
import {moviesSortTypes} from '../common_components/App'

export default function ResultSort({setSortType}) {
    function changeSort(option) {
        setSortType(option.target.value)
    }

    return (
        <div className="result-sort display-flex">
            <div className="text-grey-2 result-sort-label text-uppercase">Sort By</div>
            <div className="result-sort-dropdown text-uppercase display-flex">
                <select onChange={changeSort} defaultValue={moviesSortTypes.year}
                        className="result-sort-dropdown text-uppercase display-flex text-white">
                    <option value={moviesSortTypes.year}
                            className="text-white">Release Date
                    </option>
                    <option value={moviesSortTypes.rating}
                            className="text-white">Rating
                    </option>
                    {/*<i className="dropdown icon text-red"/>*/}
                </select>
            </div>
        </div>
    )
}