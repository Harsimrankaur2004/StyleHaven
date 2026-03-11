import { useState } from "react";
import Category from "./Category";
import Colors from "./Colors";
import Gender from "./Gender";
import Hamburger from "./Hamburger";

const SideBar = ({ handleChange }) => {
  const [sidebarInvisible, setSidebarInvisible] = useState(true);

  return (
    <aside
      className={`${sidebarInvisible ? "top-24 ml-3 absolute" : "top-20 bottom-0 fixed"}`}
    >
      <Hamburger
        sidebarInvisible={sidebarInvisible}
        setSidebarInvisible={setSidebarInvisible}
      />

      <div
        className={`sidebar ${sidebarInvisible ? "hidden" : "block"} h-full min-[718px]:block w-70 px-6 py-3 bg-[#1b212b] items-center rounded-r-2xl`}
      >
        <h1 className="text-3xl font-bold text-white">FILTER</h1>
        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <Gender handleChange={handleChange} />
      </div>
    </aside>
  );
};

export default SideBar;
