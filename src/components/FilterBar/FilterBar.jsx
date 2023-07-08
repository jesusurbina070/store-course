import React from "react";
import "./FilterBar.scss";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
function FilterBar({ values, parameter, mainPath }) {
  // const location = useLocation();
  // const pathname = location.search;
  // console.log(pathname)
  const [searchParams] = useSearchParams();
  const { categories } = Object.fromEntries([...searchParams]);
  console.log(categories);

  const road = `?${parameter}=`;
  return (
    <nav className="FilterBar">
      <NavLink
        to={`/${mainPath}`}
        className={
             !!categories ? "FilterBar__link" : "FilterBar__link isActive"
        }
      >
        Todos
      </NavLink>
      {values?.map(({ name, value }) => (
        <NavLink
          to={`${road}${value}`}
          className={
            categories === value
              ? "FilterBar__link isActive"
              : "FilterBar__link"
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default FilterBar;
