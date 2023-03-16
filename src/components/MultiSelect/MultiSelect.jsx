import React, { useState } from 'react'

const values = [
    "Audio Visual",
    "Programación",
    "Diseño",
    "Marketing",

]

function MultiSelect({ setValue, register, type}) {
    const [selected, setSelected] = useState([])
    const [options, setOptions] = useState(values)




    const handleClick = (option) => {
        setSelected(prev => [...prev, option])
        setValue(type, selected)
        const newOption = options.filter((o => o !== option))
        setOptions(newOption)
    }

    const deleteValue = (v) => {
        const newValue = selected?.filter((o) => o != v)
        setSelected(newValue)
        setValue(type, newValue)
        setOptions([...options, v].sort())
    }

    return (
        <div>
            <label {...register("categories", { required: true })} htmlFor="">
                {selected?.length === 0 ? "Selecciona una opción" : selected?.map((selected) => (
                    <div>{selected} <span><button onClick={() => deleteValue(selected)}>delate</button></span></div>
                ))}
            </label>
            <div>
                {options?.map((option) => (
                    <div onClick={() => handleClick(option)}>{option}</div>
                ))}
            </div>
        </div>
    )
}

export default MultiSelect
