import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardMedia, CardContent, } from '@mui/material';
import { formatDate, getImageUrl } from '../../../utils';

export const PeopleList = ({ people, onClick }) => {

    return (
        <Grid container spacing={2} >
            {people.map((person) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={person.id}>
                    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={() => onClick(person.id)}>
                        <CardMedia
                            component="img"
                            image={getImageUrl(person.profile_path)}
                            alt={`Person ${person.name}`}
                        />
                        <CardContent>
                            <Typography variant="subtitle2" color="text.primary">
                                {person.name}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary" >
                                {formatDate(movie.release_date)}
                            </Typography> */}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array,
    onClick: PropTypes.func,
};
