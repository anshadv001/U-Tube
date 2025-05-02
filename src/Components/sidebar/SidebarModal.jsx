import { useContext } from "react";
import Sidebar from "./sidebar";
import ReactDOM from "react-dom";
import { SidebarContext } from "../../utils/sidebarContext/contexts";
import { twMerge } from 'tailwind-merge';

const SidebarModal = ({ display }) => {
  const { showLargeSidebar, setShowLargeSidebar } = useContext(SidebarContext);

  return ReactDOM.createPortal(
    <div className={twMerge("flex fixed inset-0 z-50",display)}>
      <div>
        <Sidebar withLogo={true} display="flex ml-4" />
      </div>
      <div
        className="flex-1 bg-neutral-800 opacity-50"
        onClick={() => {
          setShowLargeSidebar(!showLargeSidebar);
        }}
      ></div>
    </div>,
    document.getElementById("sidebar-modal")
  );
};

export default SidebarModal;
