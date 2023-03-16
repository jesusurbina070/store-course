import React from 'react'

function Course({ data }) {
    const { image, categories, id, name, description } = data
    return (
        <article>
            <img src={image.url} alt="" width="150" height="150" />
            <div><p>{categories[0]}</p></div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{id}</p>
        </article>
    )
}

export default Course