import "./Dashboard.scss";
import SideBar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";
import { useState } from "react";

const Dashboard: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showNode, setShowNode] = useState("");




  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <section className="dashboard">
      <MainContent toggleSidebar={toggleSidebar} />
      {showSidebar && <SideBar toggleSidebar={toggleSidebar} />}
    </section>
  );
};

export default Dashboard;
