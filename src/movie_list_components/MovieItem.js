import React from 'react'
import PropTypes from 'prop-types'
import MovieImage from "./MovieImage";
import MovieTitle from "./MovieTitle";
import MovieGenre from "./MovieGenre";
import MovieReleaseDate from "./MovieReleaseDate";
import Options from "./Options";

export default function MovieItem({movie, headerState, setHeaderState}) {
    return (
        <div className="movie-item">
            <div className="movie-img-container">
                <MovieImage image={movie.poster_path} headerState={headerState} setHeaderState={setHeaderState}
                            movieId={movie.id}/>
                <Options movie={movie}/>
            </div>
            <div className="movie-info display-flex">
                <div className="movie-description">
                    <MovieTitle title={movie.title}/>
                    <MovieGenre genre={movie.genres}/>
                </div>
                <div>
                    <MovieReleaseDate year={movie.release_date}/>
                </div>
            </div>
        </div>
    )
}

MovieItem.propType = {
    movie: {
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }
}
