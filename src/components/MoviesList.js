import React, { useState, useRef } from "react";
import Movies from "./Movies";
import classes from "./MoviesList.module.css";
const DUMMY_MOVIES = [
  { title: "anjaan", description: "thriller", id: "anjaan" },
];
function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const titleRef = useRef();
  const descriptionRef = useRef();

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
      const response = await fetch(
        "https://learn-http-4c347-default-rtdb.firebaseio.com/movies.json"
      );
      // const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      let transformedMoviesList = [];
      for (let key in data) {
        transformedMoviesList.push({
          title: data[key].title,
          id: key,
          description: data[key].description,
        });
      }
      setMoviesList(transformedMoviesList);
    } catch (error) {
      setErrorMessage("something went wrong!");
    }
    setIsLoading(false);
  };
  const addNewMovieHandler = async () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    const newMovie = { title: title, description: description };

    const response = await fetch(
      "https://learn-http-4c347-default-rtdb.firebaseio.com/movies.json",
      {
        method: "post",
        body: JSON.stringify(newMovie),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className={classes.MoviesPage}>
      <div className={classes.MoviesPageBackGround}></div>
      <section className={classes.newMovie}>
        <div>
          <p>title</p>
          <input ref={titleRef} type="text"></input>
        </div>
        <div>
          <p>description</p>
          <input ref={descriptionRef} type="text"></input>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={addNewMovieHandler}>
            Add new movie
          </button>
        </div>
      </section>
      <section className={classes.FetchMovies}>
        <button className={classes.button} onClick={fetchMoviesListHandler}>
          Fetch movies
        </button>
      </section>
      <section className={classes.MoviesList}>
        {isLoading && moviesList.length < 1 && <p>Loading Movies...</p>}
        {errorMessage && <p>something went wrong</p>}
        <ul>
          {moviesList.map((movie) => (
            <Movies
              key={movie.id}
              title={movie.title}
              description={movie.description}
            ></Movies>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MoviesList;
