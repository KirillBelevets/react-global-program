import React from 'react'

class ResultSort extends React.Component {
    render() {
        return (
            <div className="result-sort display-flex">
                <div className="text-grey-2 result-sort-label text-uppercase">Sort By</div>
                <div className="result-sort-dropdown text-uppercase display-flex">
                    <div className="text-white">Release Date</div>
                    <i className="dropdown icon text-red" />
                </div>
            </div>
        )
    }
}

export default ResultSort