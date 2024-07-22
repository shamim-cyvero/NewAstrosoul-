import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import MediaSlide from "../../components/MediaSlide/MediaSlide";
import SimpleCard from "../../components/SimpleCard/SimpleCard";

import course from "../../assets/courseCardImg/Online.jpg"; 
import consult from "../../assets/courseCardImg/Consultation.jpg";
import per from "../../assets/courseCardImg/per.jpg";
import HindiCourse from "../../components/HindiCourse/HindiCourse";
import EnglishCourse from "../../components/EnglishCourse/EnglishCourse";
import AstroProfile from "../../components/AstroProfile/AstroProfile";
import AstroVedio from "../../components/AstroVedio/AstroVedio";
import Blog from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const cousreCardData = [
    {
      img: course,
      title: "Online Courses",
    },
    {
      img: consult,
      title: "Online Consultation",
    },
    {
      img: per,
      title: "Personalized Reports",
    },
  ];
  return (
    <>
      <HomeSlider />
      <SimpleCard cousreCardData={cousreCardData} />
      <HindiCourse />
      <EnglishCourse />
      <AstroProfile />
      <MediaSlide />
      <Testimonial />
      <AstroVedio />
      <Blog />
    </>
  );
};

export default Home;
