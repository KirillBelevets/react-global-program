import React from 'react'
import Header from "./layout_components/Header"
import Menu from './menu_components/Menu'
import MovieList from "./movie_list_components/MovieList"
import ErrorBoundary from './common_components/ErrorBoundary'
import './global.scss'
import Footer from "./layout_components/Footer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NotFound from "./movie_list_components/pages/NotFound"

export default function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Header/>
                <div className="app">
                    <Menu/>
                    <Switch>
                        <Route exact path="/" children={<MovieList/>}/>
                        <Route path={["/search/:searchValue", "/movies/:movieId"]} children={<MovieList/>}/>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        </ErrorBoundary>
    )
}
