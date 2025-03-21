import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Paper, Card, CardMedia } from "@mui/material";
import { getImageUrl } from "../../../utils";

export const PersonDetails = ({ person }) => {
  const { name = "Unknown", profile_path, biography } = person;

  const biographyText =
    biography && biography.trim() !== ""
      ? biography
      : "No biography available.";

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          {/* Columna 1 - Poster */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardMedia
                component="img"
                image={getImageUrl(profile_path)}
                alt={
                  name ? `Profile picture of ${name}` : "No profile available"
                }
              />
            </Card>
          </Grid>

          {/* Columna 2 - Información */}
          <Grid item xs={12} sm={8}>
            <Paper sx={{ padding: 2 }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {name}
              </Typography>

              <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
                Biography
              </Typography>

              <Typography variant="body2">{biographyText}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

PersonDetails.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    profile_path: PropTypes.string,
    biography: PropTypes.string,
  }).isRequired,
};
