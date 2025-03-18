import React from "react";
import { useSelector } from "react-redux";
import { MovieDetails } from "../components";

export const MovieDetailPage = () => {
  const { movie } = useSelector((state) => state.movie);

  return <MovieDetails movie={movie} />;
};
