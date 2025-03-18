import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography, CircularProgress } from "@mui/material";
import {
  getMovies,
  getMovie,
  resetMoviesState,
} from "../../../store/slices/movie";
import { MovieList } from "../components";

export const MovieListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movies, loading, error, page, totalPages } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getMovies(1));

    return () => {
      dispatch(resetMoviesState());
    };
  }, []);

  const onMovieClick = (movieId) => {
    dispatch(getMovie(movieId))
      .then(() => navigate(`/movies/${movieId}`))
      .catch((err) => console.error("Error fetching movie:", err));
  };

  const onPaginationChange = (event, newPage) => {
    dispatch(getMovies(newPage));
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <MovieList
      movies={movies}
      onClick={onMovieClick}
      onPaginationChange={onPaginationChange}
      page={page}
      totalPages={totalPages}
    />
  );
};
