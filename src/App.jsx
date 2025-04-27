import MainBody from "./layouts/MainBody";
import PageHeader from "./layouts/PageHeader";
import WatchPage from "./layouts/Watch page/WatchPage";
import SidebarContextWrapper from "./utils/sidebarContext/SidebarContextWrapper";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <SidebarContextWrapper>
      <div className="max-h-screen max-w-screen flex flex-col mx-4 relative">
        <PageHeader />
        <Outlet/>
      </div>
    </SidebarContextWrapper>
  );
}

export default App;
