import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import Change from "./components/Change";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Exercise/>
      <Change/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
