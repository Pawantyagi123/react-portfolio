import React from "react";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./Layout/Footer"
import Navbar from "./Layout/Navbar";
import NotFound from "./NotFound";
import Skill from "./Skill";

export default function Hero() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       <Home/>
       <About/>
       <Project/>
       <Skill/>
       {/* <Contact/> */}
        <Toaster />
       <Footer/>
      </BrowserRouter>
    </div>
  );
}
