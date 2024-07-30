// eslint-disable-next-line no-unused-vars
import React from "react";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
