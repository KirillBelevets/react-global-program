import React, {useEffect, useState} from 'react'
import movies from "../movies.json";

export default function MovieDetails({headerState, setHeaderState}) {
    const [currentDetails, setCurrentDetails] = useState({})

    useEffect(() => {
        const movieIndex = movies.moviesData.findIndex(movie => {
            return movie.id === headerState
        })
        movies.moviesData[movieIndex].imagePath = require(`src/movie_list_components/movie_images/${movies.moviesData[movieIndex].image}`)

        return setCurrentDetails(movies.moviesData[movieIndex])
    }, [headerState])

    return (
        <div className="movie-details text-white display-flex">
            <div className="movie-details-image">
                <img src={currentDetails?.imagePath} alt="pic"/>
            </div>
            <div className="movie-details-information-block">
                <div className="movie-details-title">
                    <span className="movie-details-title-card">{currentDetails?.title}</span>
                    <span>   </span>
                    <span className="movie-details-title-rating">{currentDetails?.rating}</span>
                </div>
                <div className="movie-details-genre">{currentDetails?.genre}</div>
                <div className="movie-details-info">
                    <span className="movie-details-year">{currentDetails?.year}</span>
                    <span className="movie-details-time">{currentDetails?.time}<span> min</span></span>
                </div>
                <div className="movie-details-description">{currentDetails?.description}</div>
                <div className="movie-details-btn-close">
                    <button onClick={() => setHeaderState()} ><i className="search icon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}