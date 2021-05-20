import React from 'react'
import ResultFilter from "./ResultFilter";
import ResultSort from "./ResultSort";
import './menu.scss';

const Menu = () => {
    return (
        <div className="menu display-flex">
            <ResultFilter/>
            <ResultSort/>
        </div>
    )
}

export default Menu
