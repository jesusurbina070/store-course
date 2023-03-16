import React from 'react'

function Search({placeholder}) {
  return (
    <form>
        <input type="text" placeholder={placeholder} />
        <button>buscar</button>
    </form>
  )
}

export default Search