import React from "react";
import { FaHtml5 } from "react-icons/fa6"; // html
import { FaCss3 } from "react-icons/fa"; // css
import { FaJs } from "react-icons/fa"; // js
import { FaReact } from "react-icons/fa"; // react
import { FaNodeJs } from "react-icons/fa"; // node
import { SiPhp } from "react-icons/si"; // php
import { DiMysql } from "react-icons/di"; // mysql
import { DiMongodb } from "react-icons/di"; //mongo db
import { RiTailwindCssFill } from "react-icons/ri"; // tailwind
import { FaBootstrap } from "react-icons/fa"; // bootstrap
import { SiExpress } from "react-icons/si"; // express
import { FaPython } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa"; //Git
import { SiGnubash } from "react-icons/si"; //bash | cmd
import { TiVendorMicrosoft } from "react-icons/ti"; //microsoft
import { SiAdobephotoshop } from "react-icons/si"; //photoshop
import { MdDisabledByDefault } from "react-icons/md"; // default icon

function Skill_set_item(props) {
  const skill_name = props.skill_name;

  let IconComponent;
  let classes_to_icon_comp =
    "size-[15vh] p-4 m-2  flex justify-center items-center hover:bg-[#123]  rounded-[10px] ";

  switch (skill_name) {
    case "html":
      IconComponent = <FaHtml5 className={classes_to_icon_comp} />;
      break;
    case "css":
      IconComponent = <FaCss3 className={classes_to_icon_comp} />;
      break;
    case "javascript":
      IconComponent = <FaJs className={classes_to_icon_comp} />;
      break;
    case "react":
      IconComponent = <FaReact className={classes_to_icon_comp} />;
      break;
    case "node js":
      IconComponent = <FaNodeJs className={classes_to_icon_comp} />;
      break;
    case "php":
      IconComponent = <SiPhp className={classes_to_icon_comp} />;
      break;
    case "mysql":
      IconComponent = <DiMysql className={classes_to_icon_comp} />;
      break;
    case "mongodb":
      IconComponent = <DiMongodb className={classes_to_icon_comp} />;
      break;
    case "tailwind":
      IconComponent = <RiTailwindCssFill className={classes_to_icon_comp} />;
      break;
    case "bootstrap":
      IconComponent = <FaBootstrap className={classes_to_icon_comp} />;
      break;
    case "express js":
      IconComponent = <SiExpress className={classes_to_icon_comp} />;
      break;
    case "python":
      IconComponent = <FaPython className={classes_to_icon_comp} />;
      break;
    case "mvc":
      IconComponent = <FaConnectdevelop className={classes_to_icon_comp} />;
      break;
    case "cmd | bash":
      IconComponent = <SiGnubash className={classes_to_icon_comp} />;
      break;
    case "git | github":
      IconComponent = <FaGitAlt className={classes_to_icon_comp} />;
      break;
    case "ms office":
      IconComponent = <TiVendorMicrosoft className={classes_to_icon_comp} />;
      break;
    case "photoshop":
      IconComponent = <SiAdobephotoshop className={classes_to_icon_comp} />;
      break;

    default:
      IconComponent = <MdDisabledByDefault className={classes_to_icon_comp} />;
      break;
  }
// bg-[#140e2b]
  return (
    <div>
    <div className="   backdrop-blur-2xl p-2 bg-[#140e2b]  border-2 border-gray-800 hover:border-white cursor-pointer flex flex-col justify-center items-center flex-shrink-0 rounded-2xl duration-200 ">
      <div>{IconComponent}</div>
    </div>
      <h1  className="text-center p-2   text-red-600 font-extrabold">{skill_name}</h1>

    </div>
  );
}

// Clicking on skill icon will display a glass pop-up with complete data about skills

export default Skill_set_item;
