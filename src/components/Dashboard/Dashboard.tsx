import "./Dashboard.scss";
import SideBar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";
import { useState } from "react";

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <MainContent />
    </section>
  );
};

export default Dashboard;
