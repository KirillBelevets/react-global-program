import React from 'react'
import '../global.scss'

export default function MovieForm(props) {


    return (
        <div onClick={e => e.stopPropagation()}>
            <form>
                <label className="modal-label">title</label>
                <input type="text" className="modal-input" id="movie_title"/>
                <label className="modal-label">release date</label>
                <input type="date" className="modal-input" id="movie_date"/>
                <label className="modal-label">url</label>
                <input type="url" className="modal-input" id="movie_url"/>
                <label className="modal-label">genre</label>
                <select className="modal-input" placeholder="Select genre" id="movie_genre">
                    <option value="" disabled defaultValue>Select genre</option>
                    <option value="1">drama</option>
                    <option value="2">comedy</option>
                    <option value="3">documentary</option>
                </select>
                <label className="modal-label">movie overview</label>
                <input className="modal-input" type="text" id="movie_overview"/>
                <label className="modal-label">runtime</label>
                <input className="modal-input" type="text" id="movie_runtime"/>
            </form>
        </div>
    )
}
