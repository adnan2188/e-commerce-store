import React from "react";
import "./App.css";
import Home from "./home/Home";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
// https://www.youtube.com/watch?v=pjEC9d28SKM&ab_channel=MdAlMamun
// https://www.youtube.com/watch?v=PGuKjkdGrEI&t=3977s
