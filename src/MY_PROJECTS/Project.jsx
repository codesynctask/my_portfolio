import React from "react";
import Project_item_cont from "./Project_item_cont.jsx";
import { projects } from "../data/my_portfolio_web.json";
import Bookmark from "../NAV_BOOKMARK/Bookmark.jsx";

function Project() {
  return (
    <>
    <Bookmark book_mark_name="Projects" book_mark_id="Projects" />

    <div className="p-4">
      <div className=" min-h-fit w-full bg-[#0c0723] p-10 flex gap-10 flex-col justify-center items-start text-white">
        {projects.map((x) => {
          return (
            <Project_item_cont
              key={Math.random()}
              project_obj={x}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Project;
