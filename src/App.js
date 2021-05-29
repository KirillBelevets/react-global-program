import React from 'react'
import ErrorBoundary from './common_components/ErrorBoundary'
import './global.scss'
import Footer from "./layout_components/Footer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Error404 from "./movie_list_components/pages/Error404";
import Home from "./movie_list_components/pages/Home";

export default function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <Error404/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </ErrorBoundary>
    )
}
