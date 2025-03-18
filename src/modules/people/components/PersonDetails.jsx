import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Paper, Card, CardMedia } from "@mui/material";
import { formatDate, getImageUrl } from "../../../utils";

export const PersonDetails = ({ person }) => {
  const { name, profile_path, biography } = person;

  return (
    <Box sx={{ padding: 2 }}>
      {/* Cuadrícula principal con dos filas */}
      <Grid container spacing={1}>
        {/* Fila 1 */}
        <Grid container item spacing={2}>
          {/* Columna 1 - Poster (4 columnas) */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2 }}>
              {/* Aquí va el poster de la película */}
              <Card sx={{ width: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  image={getImageUrl(profile_path)}
                  alt="Profile"
                />
              </Card>
            </Paper>
          </Grid>

          {/* Columna 2 - Información de la película (8 columnas) */}
          <Grid item xs={12} sm={8}>
            <Paper sx={{ padding: 2 }}>
              {/* Título de la película */}
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {name}
              </Typography>

              {/* Encabezado "Overview" */}
              <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
                Biography
              </Typography>

              {/* Descripción de la película */}
              <Typography variant="body2">{biography}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

PersonDetails.propTypes = {
  person: PropTypes.object,
};
