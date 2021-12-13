import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import teeth from "../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const Treatment = () => {
  return (
    <Container sx={{ marginTop: 3, alignItems: "left", textAlign: "left" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img style={{ width: "100%" }} src={teeth} alt="" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, marginTop: 5, marginBottom: 5 }}
            >
              Exceptional Dental Care, on Your Terms
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: 300, color: "gray" }}
              sx={{ marginBottom: 10 }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#4db6ac" }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Treatment;
