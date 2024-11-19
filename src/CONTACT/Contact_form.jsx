import React from "react";
import Input_comp from "./Input_comp";

function Contact_form() {
  return (
    <form
      action=""
      className=" border-4 rounded-2xl p-10  uppercase min-h-fit  max-h-fit w-[40vw] min-w-[50vw] flex-shrink-0 flex-grow gap-5  backdrop-blur-xl text-white border-[#ffffff50]
      flex flex-col items-center justify-start
      "
    >
      <h1 className="text-[40px]">GET IN TOUCH</h1>

      <Input_comp inp_name="Name" type="text" />
      <Input_comp inp_name="Phone" type="number" />
      <Input_comp inp_name="Email" type="email" />

      <div className="w-full h-fit py- 5 flex  items-center  justify-evenly gap-10 ">
        <label className="cursor-pointer text-red-600 font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Enter your Query"
          className="w-[60%]  rounded-lg font-bold indent-3 text-black py-3 px-2 border-none outline-none focus:outline-red-600 "
          id="message"
          name="message"
          required
        />
      </div>

      <button
        className="my-5 -mb-2 border-2 py-3 px-10 border-[#ffffff46] hover:border-white rounded-lg uppercase text-[4vh] font-bold backdrop-blur-3xl text-red-600 "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Contact_form;
