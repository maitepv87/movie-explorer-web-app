import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTrending } from "../../../store/slices/trending";
import { Home } from "../componentes";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { trendingData, totalPages } = useSelector((state) => state.trending);

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
    <Home
      timeWindow={timeWindow}
      onChange={handleTimeWindowChange}
      trendingData={trendingData}
      onReachEnd={handleReachEnd}
    />
  );
};
