import React, { useState, useLayoutEffect } from 'react'
import Modal from '../../../../components/Modal/Modal';
import { updateUser } from "../../../../services/firebase.user.update"

const rols = ["admin", "studient", "proffesor"]

function SelectRol({ value, setForm, uid }) {
    const [rol, setRol] = useState(value)
    const [modal, setModal] = useState(false)


    const handleChange = (e) => {
        setRol(e.target.value);
        setModal(true)
    }

    const handleSubmit = () => {
        updateUser(uid, rol)
        setModal(false)
        setForm(false)
    }

    const filterRoles = rols.filter((r) => rol !== r)


    return (
        <form onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                <option value="">{rol}</option>
                {filterRoles?.map((rol) => (
                    <option key={rol} value={rol}>{rol}</option>
                ))}
            </select>
            {modal ? (
                <Modal>
                    <div>
                        <p>Esta seguro de realizar esta acción</p>
                        <button onClick={handleSubmit}>aceptar</button>
                        <button onClick={() => {
                            setModal(false)
                            setForm(false)
                        }}>
                            cancelar
                        </button>
                    </div>
                </Modal>
            )
                : null
            }
        </form>

    )
}

export default SelectRol