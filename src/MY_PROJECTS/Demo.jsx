import React from "react";

function Demo({ project_link }) {
  return (
    <>
      <a
        className="h-[10vh] uppercase bg-[#0c0723] border-2 border-[#0c0723] hover:border-white duration-500 flex justify-center items-center rounded-2xl py-3 px-16  text-red-600 font-extrabold text-[5vh] cursor-pointer "
        href={project_link}
        onClick={() => {
          if (!project_link) {
            alert("Demo Link is not available");
          }
        }}
        target="_blank"
      >
        demo
      </a>
    </>
  );
}

export default Demo;
