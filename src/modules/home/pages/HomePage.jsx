import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { getTrending } from "../../../store/slices/trending";

export const HomePage = () => {
    const dispatch = useDispatch();
    const { trendingData, page, totalPages } = useSelector((state) => state.trending);

    const [timeWindow, setTimeWindow] = useState("day");
    const [currentPage, setCurrentPage] = useState(1);

    const handleTimeWindowChange = (event, newTimeWindow) => {
        if (newTimeWindow !== null) {
            setTimeWindow(newTimeWindow);
        }
    };

    const handleReachEnd = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        dispatch(getTrending("all", timeWindow));
    }, [dispatch, timeWindow]);

    return (
        <Box sx={{ p: 2, width: "100%" }}>
            {/* Welcome */}
            <Box sx={{ textAlign: "center", py: 1 }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Movie Explorer
                </Typography>
            </Box>

            {/* Filtro de Tiempo */}

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    gap: 2,
                    p: 1
                }}
            >
                <Typography variant="h6">Trending</Typography>
                <ToggleButtonGroup size="small" value={timeWindow} exclusive onChange={handleTimeWindowChange}>
                    <ToggleButton value="day">Today</ToggleButton>
                    <ToggleButton value="week">Week</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Swiper: All trending */}
            <Box sx={{ mt: 0 }}>
                <Swiper spaceBetween={2} slidesPerView={7} onReachEnd={handleReachEnd}>
                    {trendingData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Grid container direction="column" alignItems="center" textAlign="center">
                                <Grid item>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w154${item.poster_path || item.profile_path}`}
                                        alt={item.title || item.name}
                                        style={{ width: "100%", borderRadius: 4 }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: 12, mt: 1 }}>
                                        {item.title || item.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

