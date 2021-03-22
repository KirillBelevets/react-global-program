import React from 'react'

class ResultSort extends React.Component {
    render() {
        return (
            <div className="result-sort display-flex">
                <div className="text-grey-2 result-sort-label text-uppercase">Sort By</div>
                {/*<div className="result-sort-dropdown text-uppercase display-flex">*/}
                    <select className="result-sort-dropdown text-uppercase display-flex text-white">
                        <option className="text-white">Release Date</option>
                        <option className="text-white">Genre</option>
                        {/*<i className="dropdown icon text-red"/>*/}
                    </select>
                </div>
            // </div>
        )
    }
}

export default ResultSort