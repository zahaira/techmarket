"use client";

import React, { useState } from "react";
import HeaderMain from "./HeaderMain";
import SidebarCategories from "./SidebarCategories";

const HeaderWithSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div>
      <HeaderMain toggleSidebar={toggleSidebar} />
      <SidebarCategories isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
};

export default HeaderWithSidebar;
