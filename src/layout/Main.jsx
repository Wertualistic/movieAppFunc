import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=db2da59&s=panda`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .then((data) => setLoading(false))
  }, []);

  const searchMovies = (mv, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=db2da59&s=${mv}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .then((data) => setLoading(false))
  };

  return (
    <div className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Movies movies={movies} />
        </>
      )}
    </div>
  );
}