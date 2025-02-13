import React, { useState } from "react";
import Siderbar from "../components/Siderbar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Siderbar
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
        <div className="w-full overflow-x-auto bg-background">
          <div className="sm:h-[calc(99vh-60px)] overflow-auto">
            <div className="w-full flex justify-center overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
              <div className="w-full md:max-w-full">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
