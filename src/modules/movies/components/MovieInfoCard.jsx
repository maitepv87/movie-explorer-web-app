import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MovieInfoCard = ({ movie, onClick }) => {
    const { release_date, poster_path, title, id } = movie;

    const date = new Date(release_date);
    const FormattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const posterImage = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'ruta/a/imagen/por/defecto.jpg';

    return (
        <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={() => onClick(id)}>
            <CardMedia
                component="img"
                image={posterImage}
                alt={`Movie poster ${title}`}
            />
            <CardContent>
                <Typography variant="subtitle2" color="text.primary">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {FormattedDate}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MovieInfoCard;

