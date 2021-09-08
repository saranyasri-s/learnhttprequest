import React, { useState } from "react";
import Movies from "./Movies";
import classes from "./MoviesList.module.css";
const DUMMY_MOVIES = [
  { title: "anjaan", description: "thriller", id: "anjaan" },
];
function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchMoviesListHandler = async () => {
    setIsLoading(true);
    // fetch("https://swapi.dev/api/films/")
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.results);
    //     setMoviesList(data.results);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setErrorMessage(null);
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/qapi/films");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      setMoviesList(data.results);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
    setIsLoading(false);
    setErrorMessage("something went wrong!");
  };
  return (
    <div className={classes.MoviesPage}>
      <div className={classes.MoviesPageBackGround}></div>
      <section className={classes.FetchMovies}>
        <button onClick={fetchMoviesListHandler}>FETCH MOVIES</button>
      </section>
      <section className={classes.MoviesList}>
        {isLoading && moviesList.length < 1 && <p>Loading Movies...</p>}
        {errorMessage && <p>something went wrong</p>}
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
