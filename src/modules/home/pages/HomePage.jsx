import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTrending } from "../../../store/slices/trending";
import { Home } from "../componentes";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { trendingData, totalPages } = useSelector((state) => state.trending);

  const [timeWindow, setTimeWindow] = useState("day");
  const [currentPage, setCurrentPage] = useState(1);

  const onTimeWindowChange = (event, newTimeWindow) => {
    if (newTimeWindow !== null) {
      setTimeWindow(newTimeWindow);
    }
  };

  const onReachEnd = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const onMediaCardClick = (mediaCardId) => {
    alert(mediaCardId);
    // dispatch(getMovie(movieId))
    //   .then(() => navigate(`/movies/${movieId}`))
    //   .catch((err) => console.error("Error fetching movie:", err));
  };

  useEffect(() => {
    dispatch(getTrending("all", timeWindow));
  }, [dispatch, timeWindow]);

  return (
    <Home
      timeWindow={timeWindow}
      onChange={onTimeWindowChange}
      trendingData={trendingData}
      onReachEnd={onReachEnd}
      onClick={onMediaCardClick}
    />
  );
};
