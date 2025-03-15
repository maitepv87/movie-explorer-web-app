import { useState } from "react";
import { Button, TextField, ToggleButton, ToggleButtonGroup, Typography, Box } from "@mui/material";

export const HomePage = () => {
    const [timeWindow, setTimeWindow] = useState("day");

    const handleTimeWindowChange = (event, newTimeWindow) => {
        if (newTimeWindow !== null) {
            setTimeWindow(newTimeWindow);
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
            {/* Sección Superior */}
            <Box sx={{ textAlign: "center", py: 5, bgcolor: "primary.main", color: "white", borderRadius: 2 }}>
                <Typography variant="h3" gutterBottom>Welcome to Movie Explorer</Typography>
                <Button variant="contained" color="secondary" size="large">Explore Now</Button>
                <Box sx={{ mt: 3 }}>
                    <TextField label="Search for a movie..." variant="outlined" fullWidth sx={{ maxWidth: 500 }} />
                </Box>
            </Box>

            {/* Sección Inferior */}
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h4">Trending</Typography>
                    <ToggleButtonGroup
                        value={timeWindow}
                        exclusive
                        onChange={handleTimeWindowChange}
                        aria-label="trending filter"
                    >
                        <ToggleButton value="day">Today</ToggleButton>
                        <ToggleButton value="week">This Week</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                {/* Carrusel de Películas (pendiente de implementación) */}
                <Box sx={{ bgcolor: "grey.900", height: 300, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <Typography>Carousel Component Here</Typography>
                </Box>
            </Box>
        </Box>
    );
};

