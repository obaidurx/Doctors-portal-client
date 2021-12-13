import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 3 }}>
          <Typography
            variant="h6"
            sx={{ color: "#009688", fontWeight: 600 }}
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" gutterBottom component="div">
            {space} SPACES AVAIABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ backgroundColor: "#009688" }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        booking={booking}
        date={date}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
