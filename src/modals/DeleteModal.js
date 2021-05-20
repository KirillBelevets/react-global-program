import React from 'react'
import Modal from "./Modal"
import {bindActionCreators} from "redux"
import {deleteMovie} from "../store/actions"
import {connect} from "react-redux"

function DeleteMovie({delModal, setDelModal, movie, deleteMovie}) {

    const delMovie = () => {
        deleteMovie(movie)
    }

    return (
        <>
            <Modal show={delModal} title="Delete Movie" onClose={() => setDelModal(!delModal)}>
                <div >
                    Are you sure you want to delete this movie?
                </div>
                <div className="btn-wrapper display-flex">
                    <button className="btn btn-submit text-uppercase" onClick={delMovie}>Confirm</button>
                </div>
            </Modal>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteMovie: deleteMovie}, dispatch)
}

export default connect(null, mapDispatchToProps)(DeleteMovie)
