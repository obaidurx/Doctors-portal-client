import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    //   <Typography style={{ color: "#4db6ac" }} variant="h6">
    //     OUR SERVICES
    //   </Typography>
    //   <Typography variant="h4" gutterBottom component="div">
    //     Services We Provide
    //   </Typography>

    <Grid item xs={4} sm={4} md={4}>
      <Card
        sx={{
          minWidth: 275,
          border: 0,
          boxShadow: 0,
          backgroundColor: "#26a69a",
          color: "white",
          p: 1,
        }}
      >
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" style={{ fontWeight: 500 }}>
            {name}
          </Typography>

          <Typography variant="body2" style={{ fontWeight: 300 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
