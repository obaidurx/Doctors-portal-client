import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import OurBlogs from "../OurBlogs/OurBlogs";
import Service from "../Service/Service";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Treatment></Treatment>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <OurBlogs></OurBlogs>
    </div>
  );
};

export default Home;
