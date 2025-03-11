import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TVShowPosterCard from '../components/TVShowPosterCard';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const TVShowsDetails = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* Lado izquierdo (Imagen o Poster) */}
                <Grid item xs={12} sm={4} lg={3} xl={2.5}>
                    <Item>
                        POSTER
                    </Item>
                </Grid>

                {/* Lado derecho (Detalles de la película) */}
                <Grid item xs={12} sm={8} lg={8} xl={9.5}>
                    <Item>
                        NAME
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TVShowsDetails;
