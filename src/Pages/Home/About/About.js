import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import clock from "../../../images/clock.png";
import location from "../../../images/location.png";
import phone from "../../../images/phone-call.png";
import CardContent from "@mui/material/CardContent";
import { Card, CardMedia, Typography } from "@mui/material";

const cards = [
  {
    name: "Opening Hours",
    description: "Saturday to Wednesday at 10am - 9pm",
    img: clock,
  },
  {
    name: "Visit our location",
    description: "Thana Road,Faridpur Sadar,Faridpur -7800",
    img: location,
  },
  {
    name: "Contact us now",
    description: "Phone:+0631-3530 , Mobile:+8801712345678",
    img: phone,
  },
];
const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cards.map((card) => (
          <Grid item xs={12} sm={4} md={4} key={card.name}>
            <Card
              style={{
                display: "flex",
                marginTop: -15,
                backgroundColor: "#26a69a",
                color: "white",
                alignItems: "center",
              }}
              sx={{
                minWidth: 275,
                m: 3,
                mt: 10,
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "auto",
                  height: "60px",
                  margin: "auto",
                  marginLeft: 10,
                }}
                sx={{}}
                image={card.img}
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
                  {card.name}
                </Typography>
                <Typography variant="subtitle2" style={{ fontWeight: 200 }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
