import React from "react";
import Skill_set_item from "./Skill_set_item";

function Skill_set(props) {
  const tech = props.technology;

  return (
    <section className="w-full  min-h-fit uppercase    flex-shrink-0 flex items-center justify-center flex-col">
      <h1 className=" w-full text-[9vh] text-center text-white bg-[#140e2b]  font-extrabold flex-shrink-0">
        {"< " + props.skill_set_name + " />"}
      </h1>
      <section className="py-4 w-full  flex gap-5  flex-wrap flex-shrink-0 items-center justify-center">
        {props.technology.map((x) => {
          return <Skill_set_item skill_name={x.name} />;
        })}
      </section>
    </section>
  );
}

// bg-green-400
export default Skill_set;
