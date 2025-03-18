import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTrending } from "../../../store/slices/trending";
import { MediaCard } from "../../../components/MediaCard";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { trendingData, page, totalPages } = useSelector(
    (state) => state.trending
  );

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
          Welcome to Movie Explorer.
        </Typography>
      </Box>

      {/* Filtro de Tiempo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          gap: 2,
          p: 1,
        }}
      >
        <Typography variant="h6">Trending</Typography>
        <ToggleButtonGroup
          size="small"
          value={timeWindow}
          exclusive
          onChange={handleTimeWindowChange}
        >
          <ToggleButton value="day">Today</ToggleButton>
          <ToggleButton value="week">Week</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Swiper: All trending */}
      <Box sx={{ mt: 0 }}>
        <Swiper
          spaceBetween={2}
          slidesPerView={6}
          onReachEnd={handleReachEnd}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {trendingData.map((item) => (
            <SwiperSlide key={item.id}>
              <MediaCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
