import React, { useState } from "react";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState('panda');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type)
  };

  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="input-field" style={{ display: "flex" }}>
            <input
              placeholder="Search"
              type="text"
              className="validate"
              value={search}
              onChange={(e) => setSearch((e.target.value))}
              onKeyDown={handleKey}
            />
            <a
              className="waves-effect waves-light btn"
              onClick={() => searchMovies(search, type)}
            >
              Search movies
            </a>
          </div>
          <div style={{ gap: "30px", display: "flex" }}>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={handleFilter}
                checked={type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === 'movie'}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === 'series'}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
