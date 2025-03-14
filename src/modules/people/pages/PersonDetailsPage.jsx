import React from 'react';
import { useSelector } from 'react-redux'
import { PersonDetails } from '../components';

export const PersonDetailsPage = () => {
    const { person } = useSelector((state) => state.people)

    return (
        < PersonDetails person={person} />
    );
};


