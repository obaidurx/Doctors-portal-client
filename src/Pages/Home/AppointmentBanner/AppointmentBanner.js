import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74,0.75)",
  marginTop: 150,
  backgroundBlendMode: "darken,luminosity",
};
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ height: 400, marginTop: -110 }} src={doctor} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box style={{ padding: 10, margin: 10 }}>
            <Typography
              variant="h5"
              sx={{ mb: 3 }}
              style={{ color: "#26a69a", fontWeight: 600 }}
            >
              Appointment
            </Typography>
            <Typography
              variant="h4"
              style={{ color: "white", fontWeight: 400 }}
            >
              Make an Appointment Today
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mb: 5 }}
              style={{ color: "white", fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              consequuntur suscipit qui eveniet ut quia ab culpa ea similique
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#4db6ac" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
