import React from 'react'
import ResultFilter from "./ResultFilter";
import ResultSort from "./ResultSort";
import './menu.scss';

const Menu = ({setSortType}) => {
    return (
        <div className="menu display-flex">
            <ResultFilter/>
            <ResultSort setSortType={setSortType}/>
        </div>
    )
}

export default Menu