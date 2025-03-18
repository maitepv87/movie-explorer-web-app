import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../movieList/MovieList";
import MovieDetails from "../movieDetails/MovieDetails";

const MovieRoutes = () => {
  const routes = [
    {
      viewId: "movies",
      path: "",
      component: <MovieList />,
    },
    {
      viewId: "movie-details",
      path: ":id",
      component: <MovieDetails />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.viewId} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default MovieRoutes;
