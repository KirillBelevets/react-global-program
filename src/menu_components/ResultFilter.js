import React from 'react'
import {bindActionCreators} from "redux";
import {filterByGenre} from "../store/actions";
import {connect} from "react-redux";

const ResultFilter = ({filterByGenre}) => {

    const filterGenre = (genre) => {
        return () => {
            filterByGenre(genre)
        }
    }

    return (
        <div className="genre-filter text-uppercase text-white display-flex">
            <div className="genre-filter-item genre-filter-item--active cursor-pointer">All</div>
            <div className="genre-filter-item cursor-pointer" onClick={filterGenre("comedy")}>Comedy</div>
            <div className="genre-filter-item cursor-pointer" onClick={filterGenre("horror")}>Horror</div>
            <div className="genre-filter-item cursor-pointer" onClick={filterGenre("documentary")}>Documentary</div>
            <div className="genre-filter-item cursor-pointer" onClick={filterGenre("crime")}>Crime</div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({filterByGenre: filterByGenre}, dispatch)
}

export default connect(null, mapDispatchToProps)(ResultFilter)
