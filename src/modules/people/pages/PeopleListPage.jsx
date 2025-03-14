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

    const onPersonClick = (personId) => {
        dispatch(getPerson(personId))
            .then(() => navigate(`/people/${personId}`))
            .catch(err => console.error('Error fetching person:', err));
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <PeopleList people={people} onClick={onPersonClick} />
    );
};
