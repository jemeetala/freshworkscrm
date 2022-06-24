import React from "react";
import BlogPost11 from "pages/BlogPost11";
import BlogPost1 from "pages/BlogPost1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogpost1" element={<BlogPost1 />} />
        <Route path="/blogpost11" element={<BlogPost11 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
