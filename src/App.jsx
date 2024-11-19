import React from "react";
import Nav from "./NAVBAR/Nav";
import About from "./ABOUT/About";
import Contact from "./CONTACT/Contact";
import Project from "./MY_PROJECTS/Project";
import Skills from "./SKILLS/Skills";
import Footer from "./FOOTER/Footer";
import CV from "./ABOUT/cv";
import CursorFollower from "./CURSOR/CursorFollower";
import Bookmark from "./NAV_BOOKMARK/Bookmark";

function App() {
  return (
    <div className="min-h-fit min-w-sreen">
      <Nav />
      <CursorFollower />
      <CV />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
