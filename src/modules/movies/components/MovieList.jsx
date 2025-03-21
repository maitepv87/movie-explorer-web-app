import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Pagination } from "@mui/material";
import { MediaCard } from "../../../components";

export const MovieList = ({
  movies,
  onClick,
  page = 1,
  totalPages = 1,
  onPaginationChange,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={movie.id}>
            <MediaCard item={movie} onClick={() => onClick(movie.id)} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={totalPages}
          onChange={onPaginationChange}
          page={page}
        />
      </Box>
    </Box>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPaginationChange: PropTypes.func.isRequired,
};
