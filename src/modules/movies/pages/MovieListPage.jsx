import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Typography, CircularProgress } from '@mui/material';
import { getMovies, getMovie } from '../../../store/slices/movie'
import { MovieList } from '../components';

export const MovieListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { movies, loading, error } = useSelector((state) => state.movie)

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    const onMovieClick = (movieId) => {
        dispatch(getMovie(movieId))
            .then(() => navigate(`/movies/${movieId}`))
            .catch(err => console.error('Error fetching movie:', err));
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <MovieList movies={movies} onClick={onMovieClick} />
    );
};
