import { useRef } from "react";
import "./SideBar.scss";
import { ReactFlow } from "reactflow";

interface SidebarProps {
  toggleSidebar: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const handleToggleClick = () => {
    toggleSidebar();
    if (toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__top">
          <p className="sidebar__title">Node Properties</p>
          <button
            className="sidebar__close-button"
            ref={toggleButtonRef}
            onClick={handleToggleClick}
            aria-label="Toggle Sidebar"
          >
            X
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
