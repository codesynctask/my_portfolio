import React from "react";
import Skill_set from "./Skill_set";
import SKILLS_DB_JSON from "../data/skill_db.json";
import Bookmark from "../NAV_BOOKMARK/Bookmark";

function Skills() {
  return (
    <>
      <Bookmark book_mark_name="Skills" book_mark_id="Skills" />

      <section className=" p-4">
        <div className=" h-full min-h-fit  p-10 w-full bg-[#0c0723] flex gap-5 flex-col items-center justify-center flex-shrink-0  text-white">
          {SKILLS_DB_JSON.map((skill, i) => {
            return (
              <Skill_set
                key={Math.random() + 1}
                skill_set_name={skill.type}
                technology={SKILLS_DB_JSON[i].technologies}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
// scale-[0.9]
export default Skills;
