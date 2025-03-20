import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export const HeroSection = (props) => {
  return (
    <Box id="hero" {...props}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "center",
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Discover&nbsp;the&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "inherit",
                color: "primary.main",
              }}
            >
              Best Movies
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Explore our vast collection of top rated films, trending hits, and
            all time classics. Find your next favorite movie now!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
