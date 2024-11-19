import React from "react";


function Project_photo({project_photo}) {
  return (
    <section className="h-[50vh] w-[40vh] min-w-[40vh] float-start bg-[#0c0723]   border-2 border-[#f4faff5a] overflow-hidden hover:p-0 duration-300 rounded-xl  flex-grow flex-shrink-1 p-2">
      <img
        src={`${project_photo}`}
        alt="aa"
        className="h-full w-full flex-shrink-0 rounded-xl  "
      />

    </section>
  );
}

export default Project_photo;
