import React from "react";
import { Route, Routes } from "react-router";

import Homepage from "pages/home";
import About from "pages/about";
import Skills from "pages/skills";
import Projects from "pages/projects";

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/stacks" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
);

export default RoutesApp;
