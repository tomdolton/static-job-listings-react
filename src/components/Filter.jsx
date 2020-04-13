import React from "react";

function Filter(props) {

  function handleRemove(e) {
    e.preventDefault();
    props.removeFilter(e.target.name);
  }

  function handleClear(e) {
    e.preventDefault();
    props.clearFilters();
  }

  return (
    <div class="filter">
      <ul class="tablets filter__tablets">
        {props.filters.map(filter => {
          return (
            <li>
              <p>{filter}</p>
              <button onClick={handleRemove} name={filter}>
                <img src="images/icon-remove.svg" alt="Remove filter" name={filter} />
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={handleClear} class="filter__clear">Clear</button>
    </div>
  )
}

export default Filter;