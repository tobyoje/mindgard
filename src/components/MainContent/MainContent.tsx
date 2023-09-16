import "./MainContent.scss";
import { useRef } from "react";

interface MainContentProps {
  toggleSidebar: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const handleToggleClick = () => {
    toggleSidebar();
    if (toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  };

  return (
    <>
      <section className="maincontent">
        <button
          ref={toggleButtonRef}
          onClick={handleToggleClick}
          aria-label="Toggle Sidebar"
        >
          Toggle Sidebar
        </button>
      </section>
    </>
  );
};

export default MainContent;
