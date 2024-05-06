import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Section from "./components/Section";
const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Section/>
    </div>
  );
};

export default App;
