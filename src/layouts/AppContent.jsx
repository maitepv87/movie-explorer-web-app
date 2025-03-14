import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
// import MovieRoutes from './modules/movies/movieRoutes/MovieRoutes';
// import TVShowsRoutes from './modules/tvShows/tvShowsRoutes/TVShowsRoutes';
// import MovieList from '../modules/movies/movieList/MovieList';
import { MovieListPage, MovieDetailPage } from '../modules/movies/pages';

import TVShowsList from '../modules/tvShows/tvShowsList/TVShowsList';
import TVShowsDetails from '../modules/tvShows/tvShowsDetails/TVShowsDetails';

export const AppContent = () => {
    return (
        <Box
            id="appContent"
            sx={(theme) => ({
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                }),
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ alignItems: 'center', width: '100%' }}
                >
                    <Routes>
                        {/* <Route path="/movies/*" element={<MovieRoutes />} />
                        <Route path="/tv-shows/*" element={<TVShowsRoutes />} /> */}
                        <Route path="/movies" element={<MovieListPage />} />
                        <Route path="/movies/:id" element={<MovieDetailPage />} />

                        <Route path="/tv-shows" element={<TVShowsList />} />
                        <Route path="/tv-shows/:id" element={<TVShowsDetails />} />
                    </Routes>
                </Stack>
            </Container>
        </Box>
    );
}


