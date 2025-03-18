import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { formatDate, getImageUrl } from "../utils";

export const MediaCard = ({ item, onClick }) => {
  const title = item.title || item.name || "Untitled";
  const releaseDate = item.release_date || item.first_air_date || item.date;

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 290,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => onClick(item.id)}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={getImageUrl(item.poster_path)}
          alt={`Poster ${title}`}
        />
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
          </Box>
          {releaseDate && (
            <Typography variant="body2" color="text.secondary">
              {formatDate(releaseDate)}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MediaCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
