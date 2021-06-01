import React, {useState} from 'react'
import './header.scss'
import {useHistory} from "react-router-dom";


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()

    const searchHandler = (e) => {
        let val = e.target.value
        setSearchValue(val)
    }

    const submitHandler = () => {
        if (searchValue.length > 0) {
            history.push(`/search/${searchValue}`)
        }
    }

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-label text-white text-uppercase">
                Find your movie
            </div>
            <div className="search-bar display-flex">
                <input type="text" className="text-grey-2" placeholder="What do you want to watch?"
                       onChange={searchHandler}/>
                <div>
                    <button type="submit" className="search-button text-uppercase cursor-pointer"
                            onClick={submitHandler}>Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
