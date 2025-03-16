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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Sección Superior */}
            <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h3" gutterBottom>Welcome to Movie Explorer</Typography>

                <Box sx={{ mt: 3 }}>
                    <TextField label="Search for a movie..." variant="outlined" fullWidth />
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

                {/* Carrusel de Películas */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                    <Typography>Carousel Component Here</Typography>
                </Box>
            </Box>
        </Box>
    );
};

