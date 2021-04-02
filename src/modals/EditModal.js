import React from 'react'
import Modal from "./Modal";
import MovieForm from "./MovieForm";

export default function EditMovie({edit, setEdit}) {
    return (
        <>
            <Modal show={edit} title="Edit Movie" onClose={() => setEdit(false)}>
                <label className="modal-label">movie id</label>
                <input type="text" className="modal-input" id="movie_id"/>
                <MovieForm buttonSubmitText={'save'}/>
            </Modal>
        </>
    )
}