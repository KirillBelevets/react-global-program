import React from 'react'
import SearchBar from './SearchBar'
import AddMovie from "./AddMovie";

const Header = () => {
    return (
        <header>
            <div className="display-flex content-justify-between">
                <div className="text-red logo">Netflix</div>
                <AddMovie/>
            </div>
            <SearchBar/>
            <div className="header-overlay" />
        </header>
    )
}

export default Header