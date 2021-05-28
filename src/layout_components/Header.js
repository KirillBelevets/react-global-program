import React from 'react'
import SearchBar from "./SearchBar"
import MovieDetails from "../movie_list_components/pages/MovieDetails"
import AddMovie from "./AddMovie"
import {Route, Switch, useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()

    const backToSearch = () => {
        history.push("/")
    }

    return (
        <header>
            <div className="display-flex content-justify-between">
                <div className="text-red logo" onClick={backToSearch}>Netflix</div>
                <Switch>
                    <Route exact path={["/", "/search/:searchValue"]}>
                        <SearchBar/>
                        <AddMovie/>
                    </Route>
                    <Route path="/movies/:movieId" children={<MovieDetails/>}/>
                </Switch>
            </div>
            <div className="header-overlay"/>
        </header>
    )
}

export default Header
