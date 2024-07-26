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

          <Route path={"UserAstrologersProfile"} element={<UserAstrologersProfile />} />
          <Route path={"UserInstructorsProfile"} element={<UserInstructorsProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
