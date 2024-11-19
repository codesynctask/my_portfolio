import React from "react";

function Input_comp(props) {
  return (
    <>
      <div className="w-full h-fit py-5 flex  items-center  justify-evenly gap-10 ">
        <label
          className="cursor-pointer text-red-600 font-bold"
          htmlFor={props.inp_name}
        >
          {props.inp_name + " "} 
        </label>
        <input
          className=" w-[60%] text-black py-3 px-2 border-none outline-none rounded-lg font-bold indent-3 focus:outline-red-600 "
          type={props.type}
          id={props.inp_name}
          name={props.inp_name}
          placeholder={"Enter " + props.inp_name}
          required
        />
      </div>
    </>
  );
}

export default Input_comp;
