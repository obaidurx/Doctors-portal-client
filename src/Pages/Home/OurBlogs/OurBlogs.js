import { CleaningServices } from "@mui/icons-material";
import { dividerClasses } from "@mui/material";
import React from "react";
import dr1 from "../../../images/people-1.png";
import dr2 from "../../../images/people-2.png";

const blogs = [
  {
    name: "Dr.Caudi",
    descriptionTitle: "2 times of brush in a day can keep you healthy",
    descriptionDetails:
      " It is a long established fact that by the readable content of a lot layout .the point ",
    img: dr1,
  },
  {
    name: "Dr.Caudi",
    descriptionTitle: "The tooth cancer is taking a challenge",
    descriptionDetails:
      " It is a long established fact that by the readable content of a lot layout .the point ",
    img: dr2,
  },
];
const OurBlogs = () => {
  return (
    <div>
      <h2>Our Blogs</h2>
    </div>
  );
};

export default OurBlogs;
