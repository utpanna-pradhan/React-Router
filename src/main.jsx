import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./components/Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Terms from "./components/Terms/Terms.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
           <Route path="github" element={<Github />} />
          <Route path="/user/:userid" element={<User />} />
          <Route path="/terms" element={<Terms />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
