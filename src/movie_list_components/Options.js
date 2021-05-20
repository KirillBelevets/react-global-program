import React, {useState} from 'react'
import OptionsBlock from "./OptionsBlock";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";

export default function Options({movie}) {
    const [show, setShow] = useState(false)
    const [showForm, setToggleShowForm] = useState(false)
    const [delModal, setDelModal] = useState(false)

    return (
        <div className="options">
            <div className={`options-icon`} onClick={() => setShow(true)}>
                <i className={'ellipsis vertical icon'}></i>
            </div>
            <OptionsBlock show={show} setShow={setShow} setEdit={setToggleShowForm} setDelModal={setDelModal}/>
            {showForm &&
                <EditModal showForm={showForm} setToggleShowForm={setToggleShowForm} movie={movie}/>
            }
            {delModal &&
                <DeleteModal delModal={delModal} setDelModal={setDelModal} movie={movie}/>
            }
        </div>
    )
}
