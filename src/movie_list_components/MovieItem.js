import React from 'react'
import PropTypes from 'prop-types'
import MovieImage from "./MovieImage";
import MovieTitle from "./MovieTitle";
import MovieGenre from "./MovieGenre";
import MovieReleaseDate from "./MovieReleaseDate";

export default function MovieItem({title, genre, year, image, key}) {
    return (
        <div className="movie-item" key={key}>
            <MovieImage image={image}/>
            <div className="movie-info flex">
                <div className="movie-description">
                    <MovieTitle title={title}/>
                    <MovieGenre genre={genre}/>
                </div>
                <div>
                    <MovieReleaseDate year={year}/>
                </div>
            </div>
        </div>
    )
}

MovieItem.propType = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
}