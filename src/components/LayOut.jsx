import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
const LayOut = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <footer className="my-4 py-4 text-center bg-slate-300">this is FOOTER .</footer>
    </div>
  );
};

export default LayOut;
