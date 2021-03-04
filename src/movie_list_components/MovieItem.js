import React from 'react'
import PropTypes from 'prop-types'
import MovieImage from "./MovieImage";
import MovieTitle from "./MovieTitle";
import MovieGenre from "./MovieGenre";
import MovieReleaseDate from "./MovieReleaseDate";

export default function MovieItem({title, genre, year, image}) {
    return (
        <div className="movie-item">
            <MovieImage image={image}/>
            <div className="movie-info display-flex">
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
}