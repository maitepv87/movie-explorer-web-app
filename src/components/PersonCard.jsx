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
import { getImageUrl } from "../utils";

export const PersonCard = ({ person, onClick, children }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => onClick(person.id)}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={getImageUrl(person.profile_path) || "/placeholder.jpg"}
          alt={`Person ${person.name}`}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
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
              {person.name}
            </Typography>

            {/* Dynamic content */}
            {children}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PersonCard.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
