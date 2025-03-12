import React from 'react';
import { useSelector } from 'react-redux'
import { Grid, Typography, Box, Paper, Fab } from '@mui/material';
import { List, Favorite, Bookmark } from '@mui/icons-material';
import MoviePosterCard from '../components/MoviePosterCard';

const MovieDetails = () => {
    const { movie } = useSelector((state) => state.movie)

    const {
        title,
        release_date,
        overview,
        poster_path,
        genres,
        runtime,
        origin_country,
    } = movie;

    const date = new Date(release_date);
    const FormattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const movieGenres = genres?.length > 0 ? genres.map((genre) => genre.name).join(", ") : "Genderless"
    const movieRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`; const movieOriginCountry = origin_country?.length > 0
        ? `(${origin_country.map((originCountry) => originCountry).join(", ")})`
        : "(unknown)";


    console.log("Component:", movie);

    return (
        <Box sx={{ padding: 2 }}>
            {/* Cuadrícula principal con dos filas */}
            <Grid container spacing={1}>
                {/* Fila 1 */}
                <Grid container item spacing={2}>
                    {/* Columna 1 - Poster (4 columnas) */}
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: 2 }}>
                            {/* Aquí va el poster de la película */}
                            <MoviePosterCard posterPath={poster_path} />
                        </Paper>
                    </Grid>

                    {/* Columna 2 - Información de la película (8 columnas) */}
                    <Grid item xs={12} sm={8}>
                        <Paper sx={{ padding: 2 }}>
                            {/* Título de la película */}
                            <Typography variant="h3" component="h1" gutterBottom>
                                {title}
                                <Typography variant="h3" component="span" color="textSecondary" sx={{ marginLeft: 1 }}>
                                    ({new Date(release_date).getFullYear()})
                                </Typography>
                            </Typography>

                            {/* Fecha de lanzamiento */}
                            <Typography variant="body1" color="textSecondary">
                                {FormattedDate} {movieOriginCountry} ・ {movieGenres} ・ {movieRuntime}
                            </Typography>


                            {/* Botones */}
                            <Box sx={{ marginBottom: 3, marginTop: 2, display: 'flex', gap: 2 }}>
                                {/* Primer botón: "Add to Watchlist" */}
                                <Fab size="medium" aria-label="like">
                                    <List />
                                </Fab>

                                {/* Segundo botón: "Heart" (Favoritos) */}
                                <Fab size="medium" aria-label="like">
                                    <Favorite />
                                </Fab>

                                {/* Tercer botón: "Add to Your Watchlist" */}
                                <Fab size="medium" aria-label="like">
                                    <Bookmark />
                                </Fab>
                            </Box>

                            {/* Encabezado "Overview" */}
                            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Overview
                            </Typography>

                            {/* Descripción de la película */}
                            <Typography variant="body2" >
                                {overview}
                            </Typography>

                        </Paper>
                    </Grid>
                </Grid>

                {/* Fila 2 (otra sección debajo) */}
                <Grid item xs={12}>
                    {/* Aquí puedes agregar más secciones o detalles */}
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Top Billed Cast
                        </Typography>
                        {/* Agrega más información aquí si la necesitas */}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieDetails;
