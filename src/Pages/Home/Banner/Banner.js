import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import bannerBg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const banner = {
  background: `url(${bannerBg})`,
  marginTop: 80,
  backgroundSize: "cover",
};

const Banner = () => {
  return (
    <Container style={banner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={{ textAlign: "left" }}>
          <Typography variant="h3" style={{ fontWeight: 500 }}>
            Your New Smile <br />
            Starts Here
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, color: "gray", p: 2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sint
            laborum pariatur natus maxime debitis.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: "#4db6ac" }}>
            GET APPOINMENT
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <img
            src={chair}
            style={{
              width: 500,
              display: "flex",
              alignItems: "center",
            }}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
