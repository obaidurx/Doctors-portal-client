import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import invertedComma from "../../../images/inverted-commas.png";
import TestimonialCards from "../TestimonialCards/TestimonialCards";

const Testimonial = () => {
  return (
    <Container sx={{ flexGrow: 1, marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              color: "#26a69a",
              fontSize: 14,
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            TESTIMONIAL
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontWeight: 400,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            What's Our Patients Says
          </Typography>

          <TestimonialCards></TestimonialCards>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
