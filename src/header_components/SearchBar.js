import React from 'react'
import './header.scss'
import SearchButton from "./SearchButton";


const searchBar = () => {

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-label text-white uppercase">
                Find your movie
            </div>
            <div className="search-bar flex">
                <input type="text" className="text-grey-2" placeholder="What do you want to watch?"/>
                <SearchButton />
            </div>
        </div>
    )
}

export default searchBar