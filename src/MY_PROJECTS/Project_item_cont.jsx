import React from "react";
import Project_photo from "./Project_photo";
import Discription from "./Discription";

function project_item_cont({ project_obj }) {

  return (
    <div className="min-h-fit  w-full bg-[#140e2b] p-8    rounded-xl flex-shrink-0 flex  justify-center  gap-5 flex-row flex-wrap">
      <Project_photo project_photo={project_obj.project_photo} />
      <Discription
        project_name={project_obj.project_name}
        project_description={project_obj.project_description}
        project_link={project_obj.project_link}
        project_tech_stack={project_obj.project_tech_stack}
      />
    </div>
  );
}

export default project_item_cont;
