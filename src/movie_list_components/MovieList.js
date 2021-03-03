import React from 'react'
import MovieItem from "./MovieItem"
import ResultCount from "./ResultCount";

let movies = [
    {
        title: "Titanic",
        genre: "Drama",
        year: 1997,
        image: "Titanic.jpg",
        key: "1997a"
    },
    {
        title: "Lion King",
        genre: "Cartoon",
        year: 1994,
        image: "LionKing.jpg",
        key: "1994a"
    },
    {
        title: "The Godfather",
        genre: "Crime, Drama",
        year: 1972,
        image: "Godfather.jpg",
        key: "1972a"
    },
    {
        title: "Forrest Gump",
        genre: "Drama, Romance",
        year: 1994,
        image: "ForrestGump.jpg",
        key: "1994b"
    },
    {
        title: "Gladiator",
        genre: "Action, Drama",
        year: 2000,
        image: "Gladiator.jpg",
        key: "2000a"
    },
    {
        title: "The Green Mile",
        genre: "Crime, Drama",
        year: 1999,
        image: "GreenMile.jpg",
        key: "1999a"
    }
]


export default function MovieList() {
    return (
        <>
            <ResultCount amount={movies.length}/>
            <div className="movie-list flex">
                {movies.map((movie) => (
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
