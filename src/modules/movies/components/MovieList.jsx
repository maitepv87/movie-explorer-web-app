import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardMedia, CardContent, } from '@mui/material';
import { formatDate, getImageUrl } from '../../../utils';

export const MovieList = ({ movies, onClick }) => {

    return (
        <Grid container spacing={2} >
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={movie.id}>
                    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={() => onClick(movie.id)}>
                        <CardMedia
                            component="img"
                            image={getImageUrl(movie.poster_path)}
                            alt={`Movie poster ${movie.title}`}
                        />
                        <CardContent>
                            <Typography variant="subtitle2" color="text.primary">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                {formatDate(movie.release_date)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array,
    onClick: PropTypes.func,
};
