import React from 'react';
// import { useSelector } from 'react-redux'
import { Grid, Typography, Button, Box, Paper } from '@mui/material';
// import MoviePosterCard from '../components/MoviePosterCard';

const MovieDetails = () => {
    // const { movie } = useSelector((state) => state.movie)

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
                            <img
                                src="https://via.placeholder.com/300x450" // Puedes usar la URL del poster
                                alt="Poster de película"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Paper>
                    </Grid>

                    {/* Columna 2 - Información de la película (8 columnas) */}
                    <Grid item xs={12} sm={8}>
                        <Paper sx={{ padding: 2 }}>
                            {/* Título de la película */}
                            <Typography variant="h3" component="h1" gutterBottom>
                                Título de la Película
                            </Typography>

                            {/* Fecha de lanzamiento */}
                            <Typography variant="body1" color="textSecondary" paragraph>
                                Fecha de lanzamiento: <strong>01 Enero 2025</strong>
                            </Typography>

                            {/* Botones */}
                            <Box sx={{ marginBottom: 2 }}>
                                <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
                                    Ver Trailer
                                </Button>
                                <Button variant="outlined" color="secondary">
                                    Agregar a Favoritos
                                </Button>
                            </Box>

                            {/* Descripción de la película */}
                            <Typography variant="body2" >
                                Aquí va la descripción de la película. Puedes agregar un párrafo de texto
                                describiendo la trama o cualquier otro detalle relevante.
                            </Typography>

                            {/* Director de la película */}
                            <Typography variant="body1">
                                <strong>Director:</strong> Nombre del director
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Fila 2 (otra sección debajo) */}
                <Grid item xs={12}>
                    {/* Aquí puedes agregar más secciones o detalles */}
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Otras Secciones
                        </Typography>
                        {/* Agrega más información aquí si la necesitas */}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieDetails;
