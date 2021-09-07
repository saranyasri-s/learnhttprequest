import React, { useState } from "react";
import Movies from "./Movies";
import classes from "./MoviesList.module.css";
const DUMMY_MOVIES = [
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
  { title: "anjaan", description: "thriller", id: "anjaan" },
];
function MoviesList() {
  const [moviesList, setMoviesList] = useState(DUMMY_MOVIES);

  return (
    <div className={classes.MoviesPage}>
      <div className={classes.MoviesPageBackGround}></div>
      <section className={classes.FetchMovies}>FETCH MOVIES</section>
      <section className={classes.MoviesList}>
        <ul>
          {moviesList.map((movie) => (
            <Movies
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
