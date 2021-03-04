import React from 'react'
import MovieItem from "./MovieItem"
import ResultCount from "./ResultCount"
import movies from './movies.json'

export default function MovieList() {
    return (
        <>
            <ResultCount amount={movies.moviesData.length}/>
            <div className="movie-list display-flex">
                {movies.moviesData.map((movie) => (
                    <MovieItem
                        title={movie.title}
                        genre={movie.genre}
                        year={movie.year}
                        image={movie.image}
                        key={movie.key}
                    />
                ))}
            </div>
        </>
    )
}
