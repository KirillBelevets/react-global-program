import React from 'react'
import MovieItem from "./MovieItem"
import ResultCount from "./ResultCount"

export default function MovieList({headerState, setHeaderState, movieList}) {
    return (
        <>
            <ResultCount amount={movieList.length}/>
            <div className="movie-list display-flex">
                {movieList.map((movie) => (
                    <MovieItem
                        title={movie.title}
                        genre={movie.genre}
                        year={movie.year}
                        image={movie.image}
                        key={movie.id}
                        movieId={movie.id}
                        headerState={headerState}
                        setHeaderState={setHeaderState}
                    />
                ))}
            </div>
        </>
    )
}
