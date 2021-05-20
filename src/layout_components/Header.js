import React, {useEffect, useState} from 'react'
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import MovieDetails from "../movie_list_components/pages/MovieDetails";
import AddMovie from "./AddMovie";

const Header = ({headerState, setHeaderState, movieList}) => {

    return (
        <header>
            <div className="display-flex content-justify-between">
                <div className="text-red logo">Netflix</div>
                {
                    !headerState &&
                    <>
                        <SearchBar/>
                        <AddMovie/>
                    </>
                }
            </div>
            {
                headerState && <MovieDetails headerState={headerState} setHeaderState={setHeaderState} movieList={movieList}/>
            }
            <div className="header-overlay"/>
        </header>
    )
}

export default Header
