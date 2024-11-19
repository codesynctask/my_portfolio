import React from "react";
import Profile from "./profile";
import Contact_form from "./Contact_form";
import "../index.css";
import Bookmark from "../NAV_BOOKMARK/Bookmark";

function Contact() {
  return (
    <>
    <Bookmark book_mark_name="Contact" book_mark_id="Contact" />


      <div className="p-4">
        <div className=" min-h-fit   min-w-full  bg-[#0c0723] flex  flex-shrink-0 flex-row items-center justify-center flex-wrap gap-10  p-16 py-20 text-white relative overflow-hidden">
          <Profile />
          <Contact_form />
        </div>
      </div>
    </>
  );
}

export default Contact;
