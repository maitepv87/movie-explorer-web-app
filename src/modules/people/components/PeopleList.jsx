import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Box, Pagination } from '@mui/material';
import { getImageUrl } from '../../../utils';

export const PeopleList = ({ people, onClick, totalPages, page, onPaginationChange }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                {people.map((person) => {
                    const knownForMovies = person.known_for?.map(movie => movie.title || movie.name).join(" · ") || "No known";

                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={person.id}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => onClick(person.id)}>
                                <CardActionArea sx={{ flexGrow: 1 }}>
                                    <CardMedia
                                        component="img"
                                        image={getImageUrl(person.profile_path)}
                                        alt={`Person ${person.name}`}
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
                                                {person.name}
                                            </Typography>

                                            {/* Known For */}
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    mt: 0.5
                                                }}
                                            >
                                                {knownForMovies}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
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

PeopleList.propTypes = {
    people: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};
