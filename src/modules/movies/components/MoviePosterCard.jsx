import React from 'react';
import { Card, CardMedia } from '@mui/material';

const MoviePosterCard = ({ posterPath }) => {

    const posterImage = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : 'ruta/a/imagen/por/defecto.jpg';

    return (
        <Card sx={{ width: "100%", height: "100%" }}>
            <CardMedia
                component="img"
                image={posterImage}
                alt="Movie poster"
            />
        </Card>
    );
};

export default MoviePosterCard;