import React from "react";
import About_text from "./About_text";
import Bookmark from "../NAV_BOOKMARK/Bookmark";

// react icon

function About() {

  
  return (
    <>
      <Bookmark book_mark_id="About" />
      <section className=" h-screen w-full     p-4 ">
        <div className="    overflow-hidden   h-full w-full relative justify-center items-center flex    font-extrabold   ">
          <div className=" h-full w-full     justify-center items-center flex absolute   flex-shrink-0  bg-[#0c0723]  ">
            <img
              src="../../cut-out-black.png"
              alt="black cut out man"
              className="h-full min-h-screen  flex-shrink-0 "
            />
          </div>

          <About_text text_name="Deepak" />
        </div>
      </section>
    </>
  );
}

export default About;
