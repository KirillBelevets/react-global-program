import React from 'react'
import Header from "../header_components/Header"
import Menu from '../menu_components/Menu'
import MovieList from "../movie_list_components/MovieList";
import ErrorBoundary from './ErrorBoundary'
import '../global.scss';

class App extends React.Component {

    render() {
        return (
            <>
                <ErrorBoundary>
                    <Header/>
                    <div className="app">
                        <Menu/>
                        <MovieList/>
                    </div>
                </ErrorBoundary>
            </>
        )
    }
}

export default App