import React, { useEffect } from "react";
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
import { useDisclosure } from "@chakra-ui/react";
import AlertModalForContact from "../../components/AlertModalForContact/AlertModalForContact";

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

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
  let timeout;
// function myFunction() {
//   timeout = setTimeout(alertFunc, 5000);
// }
// function alertFunc() {
//   onOpen()
// }
window.onload =()=>{
  timeout = setTimeout(()=>onOpen(), 5000);
}

// useEffect(()=>{
//   myFunction()
// },[])
  return (
    <>
      <HomeSlider />
     <AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
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
