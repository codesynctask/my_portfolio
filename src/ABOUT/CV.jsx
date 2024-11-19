import React from "react";
import { FaDownload } from "react-icons/fa";

function CV() {
  return (
    <a
      href="../../public/DEEPAK_SHARMA_RESUME_MDSE.pdf"
      download={false}
      target="_blank"
      className="fixed top-3 right-8  z-50 backdrop-blur-2xl    size-[95px]  flex justify-center items-center gap-3  uppercase rounded-l-2xl text-wrap text-center flex-col font-extrabold cursor-pointer text-white   hover:bg-[#000000] border-[10px] hover:border-[10px]  duration-[0.8s] "
    >
      <FaDownload className="flex-shrink-0 scale-150 self-center  text-white" />
      <h1 className="text-red-600">CV</h1>
    </a>
  );
}

export default CV;
