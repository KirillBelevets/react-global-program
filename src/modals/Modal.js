import React from 'react'
import './modal.scss'

export default function Modal({title, show, onClose, children}) {

    return (
        <>
            {show ?
                <div className="modal" >
                    <div className="modal-container" onClick={onClose} >
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h1 className="text-white text-uppercase">{title}</h1>
                            <button onClick={onClose} className="button-close">x</button>
                            {children}
                        </div>
                    </div>
                </div> : null}
        </>
    )
}