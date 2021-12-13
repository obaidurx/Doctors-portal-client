import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import { Grid } from "@mui/material";
// const cards = [
//   {
//     description:
//       "It is a long-established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal",
//     nam: "Winson Herry",
//     img: people1,
//   },
//   {
//     description:
//       "It is a long-established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal",
//     nam: "Arleen Watson",
//     img: people2,
//   },
//   {
//     description:
//       "It is a long-established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal",
//     nam: "Paul Alex",
//     img: people3,
//   },
// ];
const TestimonialCards = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 5 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
              gutterBottom
            >
              It is a long-established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribute to using ‘Content here, content
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img style={{ width: "20%" }} src={people1} alt="" />

              <Typography
                sx={{ textAlign: "left", marginX: 2 }}
                color="text.secondary"
                gutterBottom
              >
                <Typography
                  sx={{ fontSize: 13, fontWeight: 500, color: "#4DB6AC" }}
                >
                  Winson Herry
                </Typography>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 400, color: "#333" }}
                >
                  California
                </Typography>
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
              gutterBottom
            >
              It is a long-established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribute to using ‘Content here, content
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img style={{ width: "20%" }} src={people2} alt="" />

              <Typography
                sx={{ textAlign: "left", marginX: 2 }}
                color="text.secondary"
                gutterBottom
              >
                <Typography
                  sx={{ fontSize: 13, fontWeight: 500, color: "#4DB6AC" }}
                >
                  Winson Herry
                </Typography>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 400, color: "#333" }}
                >
                  California
                </Typography>
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
              gutterBottom
            >
              It is a long-established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribute to using ‘Content here, content
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img style={{ width: "20%" }} src={people3} alt="" />

              <Typography
                sx={{ textAlign: "left", marginX: 2 }}
                color="text.secondary"
                gutterBottom
              >
                <Typography
                  sx={{ fontSize: 13, fontWeight: 500, color: "#4DB6AC" }}
                >
                  Winson Herry
                </Typography>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 400, color: "#333" }}
                >
                  California
                </Typography>
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TestimonialCards;
