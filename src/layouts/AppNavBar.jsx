import * as React from 'react';
import { NavLink } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, Container } from '@mui/material';
import { ProfileSettingsMenu } from './ProfileSettingsMenu';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export const AppNavBar = () => {
    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to="/movies" style={{}} >
                                <Button variant="text" color="info" size="small">
                                    Movies
                                </Button>
                            </NavLink>
                            <NavLink to="/tv-shows" style={{}}>
                                <Button variant="text" color="info" size="small">
                                    TV Shows
                                </Button>
                            </NavLink>
                            <NavLink to="/people" style={{}} >
                                <Button variant="text" color="info" size="small">
                                    People
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                    <ProfileSettingsMenu />
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

