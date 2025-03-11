import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieApi } from '../../../api/movieApi';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import MovieInfoCard from '../components/MovieInfoCard';
import { getMovie } from '../../../store/slices/movie'

const MovieList = () => {
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const apiKey = 'e8752c25ec72a395c2e9f279e9b4e18f';

    // Get movies from the API
    const fetchMovies = async () => {
        setLoading(true);
        try {
            const url = `/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
            const response = await movieApi.get(url);
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // Get details of a movie from the API
    const fetchMovieDetails = async (movieId) => {
        setLoading(true);

        dispatch(getMovie(movieId))

        // try {
        //     const url = `/movie/${movieId}?api_key=${apiKey}&language=en-US`;
        //     const response = await movieApi.get(url);
        //     console.log("API:", response.data);
        //     setMovie(response.data);
        // } catch (error) {
        //     console.error('Error fetching movie details:', error);
        //     setError(error);
        // } finally {
        //     setLoading(false);
        // }
    };

    const onMovieClick = (movieId) => {
        fetchMovieDetails(movieId);
        // Navigate to the MovieDetails path
        navigate(`/movies/${movieId}`);
    };

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