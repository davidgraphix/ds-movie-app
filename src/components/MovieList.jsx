import React from "react";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div
            key={movie.imdbID}
            className="image-container d-flex justify-content-start m-3"
          >
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={movie.Poster} alt="movie"></img>
            </a>
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </>
  );
};
