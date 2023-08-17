                        //*-----------------------Code SPliting------------------------------*
// Route-based Lazy Loading(Code Spliting): -
//(This  will break Bundle.js file into multipale Chunk file in Client Side)
// You can also apply code splitting on specific routes using dynamic imports. This way, you can load only the code necessary for a specific route when it's needed.

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import Home from "./pages/Home";       //---------- Normal Imports
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const Home = lazy(() => import("./pages/Home")); // -------- Dynamic Imports - Uded to Load ONly 1 Page at 1 Time (LAZY LOADING ) in - Bundle File in Clint Side
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
