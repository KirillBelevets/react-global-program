import React, {useState} from 'react'
import '../global.scss'
import {bindActionCreators} from "redux"
import {postMovie, saveEditMovie} from "../store/actions"
import {connect} from "react-redux"

function MovieForm({movie = null, buttonSubmitText, postMovie, saveEditMovie}) {
    const [movieFormData, setMovieFormData] = useState(movie || {})
    const [movieToEdit, setMovieToEdit] = useState(movie)

    function handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()
        if (movie) {
            saveEditMovie(movieToEdit)
        } else {
            postMovie(movieFormData)
        }
    }

    function changeHandler(e) {
        let name = e.target.name
        let val = e.target.value
        if (movie) {
            setMovieToEdit({...movieToEdit, [name]: val})
        } else {
            setMovieFormData({...movieFormData, [name]: val})
        }
    }

    function genresHandler(e) {
        let name = e.target.name
        let val = e.target.value
        if (movie) {
            setMovieToEdit({...movieToEdit, [name]: [val]})
        } else {
            setMovieFormData({...movieFormData, [name]: [val]})
        }
    }

    function runtimeHandler(e) {
        let name = e.target.name
        let val = Number(e.target.value)
        if (movie) {
            setMovieToEdit({...movieToEdit, [name]: val})
        } else {
            setMovieFormData({...movieFormData, [name]: val})
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {movieToEdit &&
                <>
                    <label className="modal-label">movie id</label>
                    <input type="text" className="modal-input" id="movie_id" value={movieToEdit.id}
                           onChange={changeHandler}/>
                </>
                }
                <label className="modal-label">title</label>
                <input type="text" className="modal-input" name="title" value={movieToEdit?.title}
                       onChange={changeHandler}/>
                <label className="modal-label">release date</label>
                <input type="date" className="modal-input" name="release_date" value={movieToEdit?.release_date}
                       onChange={changeHandler}/>
                <label className="modal-label">url</label>
                <input type="url" className="modal-input" name="poster_path" value={movieToEdit?.poster_path}
                       onChange={changeHandler}/>
                <label className="modal-label">genre</label>
                <select className="modal-input" placeholder="Select genre" name="genres"
                        onChange={genresHandler}>
                    <option value="" disabled>Select genre</option>
                    <option value="Drama" defaultValue>drama</option>
                    <option value="Comedy">comedy</option>
                    <option value="Documentary">documentary</option>
                </select>
                <label className="modal-label">movie overview</label>
                <input className="modal-input" type="text" name="overview" value={movieToEdit?.overview}
                       onChange={changeHandler}/>
                <label className="modal-label">runtime</label>
                <input className="modal-input" type="number" name="runtime" value={movieToEdit?.runtime}
                       onChange={runtimeHandler}/>
                <div className="btn-wrapper display-flex">
                    <button className="btn btn-reset text-uppercase">reset</button>
                    <button type="submit" className="btn btn-submit text-uppercase">{buttonSubmitText}</button>
                </div>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postMovie: postMovie, saveEditMovie: saveEditMovie}, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieForm)
