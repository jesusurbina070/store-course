import React, { useState } from "react";
import "./Search.scss"
import { Link } from "react-router-dom";

function Search({ placeholder, mainPath }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="Search">
      <input className="Search__input" onChange={handleChange} type="text" placeholder={placeholder} />
      <Link to={`?search=${value}`} className="Search__button">Buscar</Link>
    </form>
  );
}

export default Search;
