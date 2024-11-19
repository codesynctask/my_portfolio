import React from "react";

function Nav_item(props) {
  // console.log(props.icon_name);
  
  return (
    <a href={`#${props.icon_name}`} className="size-20  hover:border-[#e7e2e270] hover:border-2 rounded-2xl backdrop-blur-2xl cursor-pointer flex-shrink-0 flex justify-center gap-2 flex-col items-center text-red-500 text-sm font-extrabold uppercase">
      <svg
        viewBox="0 0 24 24"
        fill="rgba(239,221,221,1)"
        className="flex-grow-0 flex-shrink-0 size-[22px]"
      >
        <path d={props.iconPath_d}></path>
      </svg>

      
      <h3>{props.icon_name}</h3>
    </a>
  );
}

// props.svgPath_d

export default Nav_item;
