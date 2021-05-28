import React from 'react'
import {moviesSortTypes} from './sortTypes'
import {bindActionCreators} from "redux"
import {sortBy} from "../store/actions"
import {connect} from "react-redux"

function ResultSort({sortBy}) {
    function changeSort(option) {
        sortBy(option.target.value)
    }

    return (
        <div className="result-sort display-flex">
            <div className="text-grey-2 result-sort-label text-uppercase">Sort By</div>
            <div className="result-sort-dropdown text-uppercase display-flex">
                <select onChange={changeSort} defaultValue={moviesSortTypes.year}
                        className="result-sort-dropdown text-uppercase display-flex text-white">
                    <option value="release_date"
                            className="text-white">Release Date
                    </option>
                    <option value="vote_average"
                            className="text-white">Rating
                    </option>
                </select>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sortBy: sortBy}, dispatch)
}

export default connect(null, mapDispatchToProps)(ResultSort)
