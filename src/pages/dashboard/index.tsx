import Dashboard from "@/modules/dashboard/Dashboard";
import React from "react";
import { DashboardContextProvider } from "@/modules/dashboard/context/DashboardContext";

const index = () => {
  return (
    <DashboardContextProvider>
      <Dashboard />
    </DashboardContextProvider>
  );
};

export default index;
