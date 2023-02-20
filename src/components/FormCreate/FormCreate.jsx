import React from 'react'

function FormCreate({children, buttonName, title, handleSubmit, handleForm}) {
  return (
    <section>
        <form onSubmit={handleSubmit(handleForm)}>
            <div>
                {children}
            </div>
            <button>{buttonName}</button>
        </form>
    </section>
  )
}

export default FormCreate