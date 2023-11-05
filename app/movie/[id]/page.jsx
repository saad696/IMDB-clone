import React from "react";

const API_KEY = process.env.API_KEY;

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  return await res.json();
};

const MoviePage = async ({params}) => {
    const movie = await getMovie(params.id)
console.log(movie)
  return <div>{movie.name}</div>;
};

export default MoviePage;
