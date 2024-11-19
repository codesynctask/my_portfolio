import React from "react";
import "../index.css";
import { contact_link } from "../data/my_portfolio_web.json";
import { useRef } from "react";

// icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function profile() {
  const profilePicRef = useRef(null);

  return (
    <div className=" h-[40vh] w-[40vh] min-size-[40vh] flex-grow flex-shrink   flex justify-center items-center ">
      <div className=" scale-[0.95] size-[80%]     flex justify-center items-center    relative z-20 flex-shrink">
        <a
          target="_blank"
          href={contact_link[0].jump_link}
          className="flex justify-center items-center hover:scale-[0.8] duration-[0.5s]  rotate-[0deg] pizza-slice origin-top scale-[0.67] size-[40vh] rounded-full bg-[#123] absolute top-[50%]"
        >
          <FaFacebook className="h-[20%] scale-[3] absolute bottom-3  hover:fill-red-600 cursor-pointer" />
        </a>

        <a
          target="_blank"
          href={contact_link[1].jump_link}
          className="flex justify-center hover:scale-[0.8] duration-[0.5s]  rotate-[-60deg] pizza-slice origin-top scale-[0.67] size-[40vh] rounded-full bg-[#123] absolute top-[50%]"
        >
          <FaInstagram className="h-[20%] scale-[3] absolute bottom-3  hover:fill-red-600 cursor-pointer" />
        </a>

        <a
          target="_blank"
          href={contact_link[2].jump_link}
          className="flex justify-center hover:scale-[0.8] duration-[0.5s]  rotate-[-120deg] pizza-slice origin-top scale-[0.67] size-[40vh] rounded-full bg-[#123] absolute top-[50%]"
        >
          <FaTwitter className="h-[20%] scale-[3] absolute bottom-3  hover:fill-red-600 cursor-pointer" />
        </a>

        <a
          target="_blank"
          href={contact_link[3].jump_link}
          className="flex justify-center hover:scale-[0.8] duration-[0.5s]   rotate-[-180deg] pizza-slice origin-top scale-[0.67] size-[40vh] rounded-full bg-[#123] absolute top-[50%]"
        >
          <FaLinkedinIn className="h-[20%] scale-[3] absolute bottom-3  hover:fill-red-600 cursor-pointer" />
        </a>

        <a
          target="_blank"
          href={contact_link[4].jump_link}
          className="flex justify-center hover:scale-[0.8] duration-[0.5s]   rotate-[-240deg] pizza-slice origin-top scale-[0.67] size-[40vh] rounded-full bg-[#123] absolute top-[50%]"
        >
          <FaGithub className="h-[20%] scale-[3] absolute bottom-3  hover:fill-red-600 cursor-pointer" />
        </a>

        <div
          onMouseOver={() => {
            profilePicRef.current.src = "../../cut-out-white.png";
          }}
          onMouseOut={() => {
            profilePicRef.current.src = "../../cut-out-black.png";
          }}
          className="overflow-hidden outline-8 outline-white size-[40vh] hover:scale-[1.1] duration-300 border-[15px] border-[#0c0723] profile-pic bg-slate-600 absolute rounded-full p-5 flex-shrink-0 flex items-center justify-center"
        >
          <img
            src="../../cut-out-black.png"
            alt="my profile pic"
            ref={profilePicRef}
            className="mb-[20%] h-ful flex-grow transition duration-150 ease-out hover:ease-in"
          />
        </div>
      </div>
    </div>
  );
}

export default profile;
