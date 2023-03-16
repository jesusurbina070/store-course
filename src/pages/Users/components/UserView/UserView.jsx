import React, { useState } from 'react'
import SelectRol from '../SelectRol/SelectRol'

function User({ user }) {
    const [form, setForm] = useState(false)
    const { name, email, rol, uid } = user
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            {form ? <SelectRol value={rol} setForm={setForm} uid={uid} /> : <p>{rol}</p>}
            <button onClick={() => setForm(prev => !prev)}>
                {form ? "cancelar" : "editar"}
            </button>
        </div>
    )
}

export default User