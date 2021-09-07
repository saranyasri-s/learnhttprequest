import React from "react";
import classes from "./Movies.module.css";
function Movies(props) {
  return (
    <div className={classes.Movies}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Movies;
