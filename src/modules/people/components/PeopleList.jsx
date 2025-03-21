import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Pagination } from "@mui/material";
import { PersonCard } from "../../../components";

export const PeopleList = ({
  people,
  onClick,
  page = 1,
  totalPages = 1,
  onPaginationChange,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {people.map((person) => {
          const knownForMovies =
            person.known_for
              ?.map((movie) => movie.title || movie.name)
              .join(" · ") || "No known";

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={person.id}>
              <PersonCard person={person} onClick={() => onClick(person.id)}>
                {/* Known For */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    mt: 0.5,
                  }}
                >
                  {knownForMovies}
                </Typography>
              </PersonCard>
            </Grid>
          );
        })}
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

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPaginationChange: PropTypes.func.isRequired,
};
