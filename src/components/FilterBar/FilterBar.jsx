import React from 'react'
import { Link } from 'react-router-dom'
function FilterBar({ values, parameter, mainPath }) {
    const road = `/${mainPath}?${parameter}=`
    return (
        <nav>
            {values?.map(({ name, value }) => (
                <Link to={!!value ? `${road}${value}` : `/${mainPath}`}>{name}</Link>
            ))}
        </nav>
    )
}

export default FilterBar