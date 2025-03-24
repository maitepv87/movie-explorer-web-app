import { Box } from "@mui/material";
import { MediaCard, SwiperContainer, ToggleFilter } from "../../../components";
import { HeroSection } from "../../../layouts";

export const Home = ({
  timeWindow,
  onChange,
  trendingData,
  onReachEnd,
  onClick,
}) => {
  return (
    <Box sx={{ p: 2, width: "100%" }}>
      {/* Hero */}
      <HeroSection sx={{ mb: 6 }} />

      {/* Time Filter */}
      <ToggleFilter
        label="Trending"
        value={timeWindow}
        onChange={onChange}
        options={[
          { value: "day", label: "Today" },
          { value: "week", label: "Week" },
        ]}
      />

      {/* Swiper: All trending */}
      <Box sx={{ mt: 0 }}>
        <SwiperContainer data={trendingData} onReachEnd={onReachEnd}>
          {(item) => <MediaCard item={item} onClick={() => onClick(item)} />}
        </SwiperContainer>
      </Box>
    </Box>
  );
};
