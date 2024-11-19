import React from "react";
import Project_photo from "./Project_photo";
import Demo from "./Demo";
import Skill_tag from "./Skill_tag";

function Discription({ project_name ,project_description , project_link ,project_tech_stack}) {
  // console.log(project_tech_stack);
  let a=1
  return (
    <section className="max-h-fit w-[40vh] min-w-[50vw] p-2 flex-wrap    border-[#f4faff5a]  flex-grow rounded-xl overflow-x-hidden ">
      <div className="flex items-center flex-wrap  p-4 gap-4  rounded-xl">
        {/* <Skill_tag name="react" /> */}
        {project_tech_stack.map((tech_item_name)=><Skill_tag name={tech_item_name} />
        )}
      </div>

      <h1 className="uppercase text-5xl p-5">
        {project_name || "Project name"}
      </h1>

      <p className="p-4  text-wrap overflow-hidden overflow-y-auto text-xs font-thin">
        { project_description || "ERROR in fetching project description!!!"}
      </p>
      <Demo project_link={project_link} />
    </section>
  );
}

export default Discription;
