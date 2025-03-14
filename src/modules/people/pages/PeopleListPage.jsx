import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Typography, CircularProgress } from '@mui/material';
import { getPeople, getPerson } from '../../../store/slices/people'
import { PeopleList } from '../components';

export const PeopleListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { people, loading, error } = useSelector((state) => state.people)

    useEffect(() => {
        dispatch(getPeople());
    }, []);

    // const onMovieClick = (movieId) => {
    //     dispatch(getMovie(movieId))
    //         .then(() => navigate(`/movies/${movieId}`))
    //         .catch(err => console.error('Error fetching movie:', err));
    // };

    // if (loading) return <CircularProgress />;
    // if (error) return <Typography color="error">{error}</Typography>;

    return (
        // <PeopleList movies={movies} onClick={onMovieClick} />
        <PeopleList />
    );
};
