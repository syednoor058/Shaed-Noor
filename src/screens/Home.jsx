// eslint-disable-next-line no-unused-vars
import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/projects/Project";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
}
