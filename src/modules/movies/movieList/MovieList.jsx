import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Grid, Typography, CircularProgress } from '@mui/material';
import MovieInfoCard from '../components/MovieInfoCard';
import { getMovies, getMovie } from '../../../store/slices/movie'

const MovieList = () => {
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
        <Grid container spacing={2} >
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={movie.id}>
                    <MovieInfoCard movie={movie} onClick={onMovieClick} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;