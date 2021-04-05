import React from 'react'
import Modal from "./Modal";

export default function DeleteMovie({delModal, setDelModal}) {

    return (
        <>
            <Modal show={delModal} title="Delete Movie" onClose={() => setDelModal(false)}>
                <div >
                    Are you sure you want to delete this movie?
                </div>
                <div className="btn-wrapper display-flex">
                    <button className="btn btn-submit text-uppercase">Confirm</button>
                </div>
            </Modal>
        </>
    )
}