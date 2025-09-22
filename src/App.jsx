import PageHeader from "./layouts/PageHeader";
import SidebarContextWrapper from "./utils/sidebarContext/SidebarContextWrapper";
import { Outlet } from "react-router-dom";
import AuthObserver from "./Components/AuthObserver";

function App() {
  return (
    <SidebarContextWrapper>
      <div className="max-h-screen max-w-screen flex flex-col mx-4 ">
        <PageHeader />
        <Outlet />
      </div>      
      <AuthObserver />
    </SidebarContextWrapper>
  );
}

export default App;
