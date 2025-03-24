import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTrending } from "../../../store/slices/trending";
import { getMovie } from "../../../store/slices/movie";
import { Home } from "../componentes";

export const HomePage = () => {
  const navigate = useNavigate();
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

    dispatch(getMovie(id))
      .then(() => navigate(`/movies/${id}`))
      .catch((err) => console.error(`Error fetching ${media_type}:`, err));
  };

  useEffect(() => {
    // dispatch(getTrending("all", timeWindow));
    dispatch(getTrending("movie", timeWindow));
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
