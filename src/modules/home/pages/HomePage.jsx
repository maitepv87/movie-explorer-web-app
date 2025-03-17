import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, ToggleButton, ToggleButtonGroup, Typography, Box } from "@mui/material";
import { getTrending } from '../../../store/slices/trending';

export const HomePage = () => {
    const dispatch = useDispatch();
    const { trendingData } = useSelector((state) => state.trending);

    const [timeWindow, setTimeWindow] = useState("day");

    const handleTimeWindowChange = (event, newTimeWindow) => {
        if (newTimeWindow !== null) {
            setTimeWindow(newTimeWindow);
        }
    };

    useEffect(() => {
        dispatch(getTrending("all", timeWindow));
    }, [timeWindow]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Welcome */}
            <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Movie Explorer
                </Typography>

                <Box sx={{ mt: 3 }}>
                    <TextField label="Search for a movie..." variant="outlined" fullWidth />
                </Box>
            </Box>

            {/* Time-Window Selection */}
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

                {/* Trending */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    {trendingData.map((data) => (
                        <Box key={data.id} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography>{data.title || data.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
