import "./StartPage.scss";
import siteLogo from "../../assets/images/mindgard_logo_white.png";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const StartPage = () => {
  const [showStartComponent, setShowStartComponent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowStartComponent(false);
    }, 3000);
  }, []);

  return (
    <>
      {showStartComponent && (
        <>
          <section className="startpage">
            <div>
              <img
                className="startpage__image"
                src={siteLogo}
                alt="Mindgard Logo"
              />
            </div>
            <div className="progress">
              <div className="progress__value"></div>
            </div>
          </section>
        </>
      )}
      {!showStartComponent && (
        <>
          <Dashboard />
        </>
      )}
    </>
  );
};

export default StartPage;
