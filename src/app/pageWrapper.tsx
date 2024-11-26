"use client";

import Footer from "@/app/(components)/Footer";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import React, { useState } from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 `}>
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="pt-16">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <PageLayout>{children}</PageLayout>;
};
export default PageWrapper;
