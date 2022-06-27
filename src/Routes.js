import React from "react";
import BlogPost1 from "pages/BlogPost1";
import Contactus from "pages/Contactus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPost1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
