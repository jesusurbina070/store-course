import React, { useState, useEffect } from 'react'

const op = ["Programacion", "Marketing", "Audio Visual", "Diseño"]

 function MultiSelect  ({setValues, register, selectValues}) {
    const [value, setValue] = useState(selectValues)
    const [options, setOptions] = useState(op.sort())

    useEffect(() => {
        setValues("categories", value)
    }, [value])

    const handleClick = (option) => {
        setValue([...value, option])
        const newOption = options.filter((o => o !== option))
        setOptions(newOption)
    }

    const deleteValue = (v) => {
        const newValue = value.filter((o) => o != v) 
        setValue(newValue)
        setOptions([...options, v].sort())
    }

  return (
    <div>
        <label {...register("categories", {required : true })} htmlFor="">
            {value?.length === 0 ? "Selecciona una opción" : value?.map((value) => (
                <div>{value} <span><button onClick={() => deleteValue(value)}>delate</button></span></div>
            ))}
        </label>
        <div>
            {options.map((option) => (
                <div onClick={() => handleClick(option)}>{option}</div>
            ))}
        </div>

    </div>
  )
}

export default MultiSelect
