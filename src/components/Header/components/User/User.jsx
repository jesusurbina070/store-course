import React from 'react'
import { useSelector } from 'react-redux'

function User() {
    const { name } = useSelector(state => state.user)
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default User