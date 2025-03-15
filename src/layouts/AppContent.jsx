import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import { HomePage } from '../modules/home/pages';
import { MovieListPage, MovieDetailPage } from '../modules/movies/pages';
import { PeopleListPage, PersonDetailsPage } from '../modules/people/pages';


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
                        <Route path="/" element={<HomePage />} />

                        <Route path="/movies" element={<MovieListPage />} />
                        <Route path="/movies/:id" element={<MovieDetailPage />} />

                        <Route path="/people" element={<PeopleListPage />} />
                        <Route path="/people/:id" element={<PersonDetailsPage />} />

                    </Routes>
                </Stack>
            </Container>
        </Box>
    );
}




