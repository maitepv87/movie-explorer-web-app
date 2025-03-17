import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardMedia, CardContent, CardActionArea, Box, Button, Pagination } from '@mui/material';
import { formatDate, getImageUrl } from '../../../utils';

export const MovieList = ({ movies, onClick, page, totalPages, onPaginationChange }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={movie.id}>
                        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => onClick(movie.id)}>
                            <CardActionArea sx={{ flexGrow: 1 }}>
                                <CardMedia
                                    component="img"
                                    image={getImageUrl(movie.poster_path)}
                                    alt={`Movie poster ${movie.title}`}
                                />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.primary"
                                            sx={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}
                                        >
                                            {movie.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {formatDate(movie.release_date)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                    count={totalPages}
                    onChange={onPaginationChange}
                    page={page}
                />
            </Box>
        </Box>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    //onLoadMore: PropTypes.func.isRequired, // Se requiere esta función para cargar más películas
};
