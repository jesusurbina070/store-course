import React, { useState } from 'react'

const values = [
    "Audio Visual",
    "Programacion",
    "Diseño",
    "Marketing",
]

function MultiSelect({ setValue, register, type}) {
    const [selected, setSelected] = useState([])

    const handleClick = (option) => {
        const newOption = [...selected, option] 
        setSelected(newOption)
        setValue(type, newOption)
        console.log(newOption)
    }

    const deleteValue = (v) => {
        const newValue = selected?.filter((o) => o != v)
        setSelected(newValue)
        setValue(type, newValue)
    }

    return (
        <div>
            <label {...register("categories", { required: true })} htmlFor="">
                {selected?.length === 0 ? "Selecciona una opción" : selected?.map((s) => (
                    <div>{s} <span><button onClick={() => deleteValue(s)}>delate</button></span></div>
                ))}
            </label>
            <div>
                {values?.filter((option) => !selected.includes(option)).map((option) => (
                    <div onClick={() => handleClick(option)}>{option}</div>
                ))}
            </div>
        </div>
    )
}

export default MultiSelect
