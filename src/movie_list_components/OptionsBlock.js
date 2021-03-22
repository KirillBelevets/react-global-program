import React from 'react'

export default function OptionsBlock({show, setShow, setEdit, setDelModal}) {

    function close() {
        setShow(false)
    }

    function openEdit() {
        close()
        setEdit(true)
    }

    function openDelete() {
        setDelModal(true)
        close()
    }

    if (!show) {
        return null
    }

    return (
        <>
            <div className="options-block">
                <div className="button-container">
                    <button className="button-close" onClick={() => setShow(false)}>
                        <i className="close icon"></i>
                    </button>
                </div>
                <div onClick={openEdit} className="option-select">Edit</div>
                <div onClick={openDelete} className="option-select">Delete</div>
            </div>
        </>

    )
}