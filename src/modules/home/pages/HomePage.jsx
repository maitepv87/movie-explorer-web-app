import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTrending } from "../../../store/slices/trending";
import { getMedia } from "../../../store/slices/media";
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

  const onMediaCardClick = (mediaCardItem) => {
    const { id, media_type } = mediaCardItem;
    console.log("Contenido de item:", mediaCardItem);
    dispatch(getMedia(id, media_type));
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
