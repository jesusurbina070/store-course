import React from 'react'
import User from '../UserView/UserView'

function UserList({ users }) {
    return (
        <section>
            {users?.map((user) => (
                <User
                    key={user.id}
                    user={user}
                />
            ))}
        </section>
    )
}

export default UserList