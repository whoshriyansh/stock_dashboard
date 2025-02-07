import React from "react";
import Siderbar from "../components/Siderbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <div>
        <Siderbar />
      </div>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Layout;
