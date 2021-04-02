import React, {useState} from 'react'
import OptionsBlock from "./OptionsBlock";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";

export default function Options() {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [delModal, setDelModal] = useState(false)

    return (
        <div className="options">
            <div className={`options-icon`} onClick={() => setShow(true)}>
                <i className={'ellipsis vertical icon'}></i>
            </div>
            <OptionsBlock show={show} setShow={setShow} setEdit={setEdit} setDelModal={setDelModal}/>
            {edit ?
                <EditModal edit={edit} setEdit={setEdit}/>
                : null}
            {delModal ?
                <DeleteModal delModal={delModal} setDelModal={setDelModal}/>
                : null}
        </div>
    )
}