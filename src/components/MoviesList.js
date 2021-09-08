import React, { useState } from "react";
import Movies from "./Movies";
import classes from "./MoviesList.module.css";
const DUMMY_MOVIES = [
  { title: "anjaan", description: "thriller", id: "anjaan" },
];
function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesListHandler = async () => {
    // fetch("https://swapi.dev/api/films/")
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.results);
    //     setMoviesList(data.results);
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    setMoviesList(data.results);
  };
  return (
    <div className={classes.MoviesPage}>
      <div className={classes.MoviesPageBackGround}></div>
      <section className={classes.FetchMovies}>
        <button onClick={fetchMoviesListHandler}>FETCH MOVIES</button>
      </section>
      <section className={classes.MoviesList}>
        <ul>
          {moviesList.map((movie) => (
            <Movies
              key={movie.episode_id}
              title={movie.title}
              description={movie.opening_crawl}
            ></Movies>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MoviesList;
