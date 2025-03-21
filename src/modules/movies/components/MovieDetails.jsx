import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Card, CardMedia } from "@mui/material";
import { List, Favorite, Bookmark } from "@mui/icons-material";
import { formatDate, getImageUrl } from "../../../utils";
import { ActionButton } from "../../../components/ActionButton";

export const MovieDetails = ({ movie }) => {
  const {
    title = "Unknown Title",
    overview = "No overview available.",
    poster_path,
    backdrop_path,
    genres = [],
    runtime = 0,
    origin_country = [],
    release_date,
  } = movie || {};

  const formatList = (list) =>
    list.length > 0
      ? list.map((item) => item.name || item).join(", ")
      : "Unknown";

  const movieGenres = formatList(genres);
  const movieOriginCountry = `(${formatList(origin_country)})`;
  const movieRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;

  return (
    <Box sx={{ position: "relative", color: "inherit", minHeight: "100vh" }}>
      {/* Backdrop */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "45vh",
          backgroundImage: `url(${getImageUrl(backdrop_path)})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          opacity: 0.3,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, padding: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Poster */}
          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={getImageUrl(poster_path)}
                alt={`${title} poster`}
              />
            </Card>
          </Grid>

          {/* Information */}
          <Grid item xs={12} sm={8} md={9}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              {title}
              <Typography variant="h3" component="span" sx={{ marginLeft: 1 }}>
                ({new Date(release_date).getFullYear()})
              </Typography>
            </Typography>

            <Typography variant="body1">
              {formatDate(release_date)} {movieOriginCountry} ・ {movieGenres}{" "}
              ・ {movieRuntime}
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
              <ActionButton
                title="Add to your List"
                label="Add to List"
                icon={<List />}
              />
              <ActionButton
                title="Add to Favorite"
                label="Favorite"
                icon={<Favorite />}
              />
              <ActionButton
                title="Add to Watchlist"
                label="Watchlist"
                icon={<Bookmark />}
              />
            </Box>

            {/* Overview */}
            <Typography variant="h5" sx={{ marginTop: 3, fontWeight: "bold" }}>
              Overview
            </Typography>
            <Typography variant="body2">{overview}</Typography>
          </Grid>
        </Grid>

        {/* Sección de Reparto */}
      </Box>
    </Box>
  );
};

ActionButton.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};
