import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#404040]">
    <div className=" container bg-[#404040] flex items-center justify-between py-6 px-3 text-white my-6">
      <div>
        <h1 className=" text-3xl font-bold">
          shop<span className=" text-textSecondary font-medium">cart</span>{" "}
        </h1>
      </div>
      <div>
        <ul className=" flex items-center gap-4">
          <li>
            <a href="/">About us </a>{" "}
          </li>
          <li>
            <a href="/">Contact </a>{" "}
          </li>
          <li>
            <a href="/">Help </a>{" "}
          </li>
        </ul>
      </div>
      <div>
        <li>
          <a href="/">English </a>{" "}
        </li>
      </div>
    </div>
    </div>
  );
};

export default Footer;
