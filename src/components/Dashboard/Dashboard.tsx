import "./Dashboard.scss";
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
