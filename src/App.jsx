import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import ConsultWithAstrologers from "./pages/ConsultWithAstrologers/ConsultWithAstrologers";
import Login from "./pages/User/Login/Login";
import SignUp from "./pages/User/SignUp/SignUp";
import UserAstrologersProfile from "./pages/ConsultWithAstrologers/UserAstrologersProfile";
import UserInstructorsProfile from "./pages/ConsultWithAstrologers/UserInstructorsProfile";
import AstrologerLogin from "./pages/Astrologer/AstrologerLogin/AstrologerLogin";
import AstrologerSignup from "./pages/Astrologer/AstrologerSignUp/AstrologerSignup";
import SingleCourse from "./pages/Course/SingleCourse";
import Astrology from "./pages/Course/Category/Astrology";
import Ayurveda from "./pages/Course/Category/Ayurveda";
import Numerology from "./pages/Course/Category/Numerology";
import Palmistry from "./pages/Course/Category/Palmistry";
import Vastu from "./pages/Course/Category/Vastu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} /> 
          <Route path={"contactus"} element={<ContactUs />} />
          <Route path={"blog"} element={<Blog />} />
          <Route path={"consult"} element={<ConsultWithAstrologers />} />

          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<SignUp />} />

          <Route path={"astrologerlogin"} element={<AstrologerLogin />} />
          <Route path={"astrologersignup"} element={<AstrologerSignup />} />

          <Route path={"user/astrologers/profile"} element={<UserAstrologersProfile />} />
          <Route path={"user/instructors/profile"} element={<UserInstructorsProfile />} />

          <Route path={"course"} element={<SingleCourse />} />

          <Route path={"astrology"} element={<Astrology />} />
          <Route path={"ayurveda"} element={<Ayurveda />} />
          <Route path={"numerology"} element={<Numerology />} />
          <Route path={"palmistry"} element={<Palmistry />} />
          <Route path={"vastu"} element={<Vastu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
