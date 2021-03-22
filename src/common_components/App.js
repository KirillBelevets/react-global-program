import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import Header from "../layout_components/Header"
import Menu from '../menu_components/Menu'
import MovieList from "../movie_list_components/MovieList";
import ErrorBoundary from './ErrorBoundary'
import '../global.scss';
import Footer from "../layout_components/Footer";
import SearchBar from "../layout_components/SearchBar";
import AddMovie from "../layout_components/AddMovie";
import MovieForm from "../modals/MovieForm";

class App extends React.Component {

    render() {
        return (
            <>
                <ErrorBoundary>
                    <Header>
                        <SearchBar/>
                        <AddMovie/>
                    </Header>
                    <div className="app">
                        <Menu/>
                        <MovieList/>
                    </div>
                    <Footer />
                    {/*<Switch>*/}
                    {/*    <Route  exect path="/create" component={CreateMovie}/>*/}
                    {/*    <Route  exect path="/edit/:movieId" component={EditMovie}/>*/}
                    {/*    <Route exect path="/delete/:movieId" component={DeleteMovie}/>*/}
                    {/*    <Redirect to="/" />*/}
                    {/*</Switch>*/}

                </ErrorBoundary>
            </>
        )
    }
}

export default App