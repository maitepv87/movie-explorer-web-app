import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Card, CardMedia } from "@mui/material";
import { List, Favorite, Bookmark } from "@mui/icons-material";
import { formatDate, getImageUrl } from "../../../utils";
import { ActionButton } from "../../../components/ActionButton";

export const MovieDetails = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    genres,
    runtime,
    origin_country,
    release_date,
  } = movie;

  const movieGenres =
    genres?.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "Unknown";
  const movieRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  const movieOriginCountry =
    origin_country?.length > 0
      ? `(${origin_country.map((originCountry) => originCountry).join(", ")})`
      : "(Unknown)";

  return (
    <Box sx={{ position: "relative", color: "white", minHeight: "100vh" }}>
      {/* Imagen de fondo con overlay */}
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
          opacity: 0.2,
        }}
      />

      {/* Contenido Principal */}
      <Box sx={{ position: "relative", zIndex: 2, padding: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Columna del Poster */}
          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={getImageUrl(poster_path)}
                alt="Movie poster"
              />
            </Card>
          </Grid>

          {/* Columna de Información */}
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h3" component="h1" fontWeight="bold">
              {title}
              <Typography variant="h3" component="span" sx={{ marginLeft: 1 }}>
                ({new Date(release_date).getFullYear()})
              </Typography>
            </Typography>

            <Typography variant="body1">
              {formatDate(release_date)} {movieOriginCountry} ・ {movieGenres}{" "}
              ・ {movieRuntime}
            </Typography>

            {/* Botones de Acción */}
            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
              <ActionButton label="Add to List" icon={<List />} />
              <ActionButton label="Favorite" icon={<Favorite />} />
              <ActionButton label="Watchlist" icon={<Bookmark />} />
            </Box>

            {/* Descripción */}
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

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  cast: PropTypes.array.isRequired, // Se espera que 'cast' sea un array de actores
};
