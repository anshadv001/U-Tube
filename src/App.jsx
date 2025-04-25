// import { useState } from "react";
import CategoryPills from "./Components/CategoryPills";
import Sidebar from "./Components/sidebar/sidebar";
import SmSidebar from "./Components/sidebar/SmSidebar";
import Body from "./layouts/Body";
import PageHeader from "./layouts/PageHeader";
import { SidebarContext } from "./utils/sidebarContext/contexts";
// import { useState } from "react";
import SidebarContextWrapper from "./utils/sidebarContext/SidebarContextWrapper";

function App() {
  return (
    <SidebarContextWrapper>
      <div className="max-h-screen max-w-screen flex flex-col mx-4 relative">
        <PageHeader />

        <div className="grid grid-cols-[auto_1fr] grow overflow-auto ">
          <Sidebar />
          <SmSidebar />
          <div className="overflow-x-hidden pb-4 ">
            <Body />
          </div>
        </div>
      </div>
    </SidebarContextWrapper>
  );
}

export default App;
