import React from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import "@/styles/pages/homepage.css";
import Skills from "../sections/Skills";

function HomePage() {
  return (
    <main id="portfolio">
      <div>
        <h1>Home</h1>
        <Home />
      </div>
      <div>
        <h1>About</h1>
        <About />
      </div>
      <div>
        <h1>Skills</h1>
        <Skills />
      </div>
    </main>
  );
}

export default HomePage;
