import React from 'react'
import Modal from "./Modal";
import MovieForm from "./MovieForm";

export default function EditMovie({movie, showForm, setToggleShowForm}) {
    return (
        <>
            <Modal show={showForm} title="Edit Movie" onClose={() => setToggleShowForm(!showForm)}>
                <MovieForm movie={movie} buttonSubmitText={'save'}/>
            </Modal>
        </>
    )
}
