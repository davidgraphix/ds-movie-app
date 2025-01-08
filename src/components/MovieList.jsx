import React from "react";

export const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};
