import React, {useState} from 'react'
import './header.scss'
import Modal from "../modals/Modal";
import MovieForm from "../modals/MovieForm";

export default function AddMovie() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="add-movie text-uppercase cursor-pointer" onClick={() => setShow(true)}>+ Add Movie
            </button>
            <Modal show={show} onClose={() => setShow(false)} title="Add Movie">
                <MovieForm/>
            </Modal>
        </div>
    )
}