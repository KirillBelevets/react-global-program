import React from "react"
import Header from "../../layout_components/Header";
import Menu from "../../menu_components/Menu";
import {Route, Switch} from "react-router-dom";
import MovieList from "../MovieList";

export default function Home() {
    return (
        <>
            <Header/>
            <div className="app">
                <Menu/>
                <Switch>
                    <Route exact path="/" children={<MovieList/>}/>
                    <Route path={["/search/:searchValue", "/movies/:movieId"]} children={<MovieList/>}/>
                </Switch>
            </div>
        </>
    )
}
