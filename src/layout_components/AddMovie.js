import React, {useState} from 'react'
import './header.scss'
import Modal from "../modals/Modal"
import MovieForm from "../modals/MovieForm"

export default function AddMovie() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="add-movie text-uppercase cursor-pointer" onClick={() => setShow(!show)}>+ Add
                Movie
            </button>
            <Modal show={show} onClose={() => setShow(!show)} title="Add Movie">
                <MovieForm buttonSubmitText={'submit'}/>
            </Modal>
        </div>
    )
}
