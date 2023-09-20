import { useRef } from "react";
import "./SideBar.scss";
import { ReactFlow } from "reactflow";
import siteLogo from "../../assets/images/mindgard_logo_white.png";

interface SidebarProps {
  selectedNode: any;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SidebarProps> = ({ setShowSidebar, selectedNode }) => {
  const handleClose = () => {
    setShowSidebar(false);
  };

  console.log(selectedNode);

  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__top">
          <h1 className="sidebar__title">Node Properties</h1>
          <button
            className="sidebar__close-button"
            onClick={handleClose}
            aria-label="Toggle Sidebar"
          >
            X
          </button>
        </div>

        <div className="sidebar__node-info">
          <ul className="sidebar__node-basic">
            <div>
              <li>
                <div className="sidebar__info-title">Type:</div>
                <div
                  className={`sidebar__info-data${
                    selectedNode.type === "convNode"
                      ? " sidebar__info-data--conv"
                      : ""
                  }${
                    selectedNode.type === "FcNodes"
                      ? " sidebar__info-data--fc"
                      : ""
                  } ${
                    selectedNode.type === "Pool"
                      ? " sidebar__info-data--pool"
                      : ""
                  }  ${
                    selectedNode.type === "inputCustom" ||
                    selectedNode.type === "outputCustom"
                      ? " sidebar__info-data--inputoutput"
                      : ""
                  }`}
                >
                  {selectedNode.type === "convNode" && "Convolution"}
                  {selectedNode.type === "FcNodes" && "Fully Connected"}
                  {selectedNode.type === "Pool" && "Pool Size"}
                  {selectedNode.type === "inputCustom" && "Input"}
                  {selectedNode.type === "outputCustom" && "Output"}
                </div>
              </li>
            </div>

            <li>
              <div className="sidebar__info-title">ID:</div>
              <div className="sidebar__info-data">{selectedNode.id}</div>
            </li>
          </ul>

          <h2 className="sidebar__sub-title">
            {selectedNode.data.parameters !== undefined && "Parameters"}
          </h2>

          <ul className="sidebar__node-basic">
            {selectedNode.data.parameters &&
              selectedNode.data.parameters.kernel_size !== undefined && (
                <li>
                  <div className="sidebar__info-title">Kernel Size:</div>
                  <div className="sidebar__info-data">
                    {selectedNode.data.parameters.kernel_size}
                  </div>
                </li>
              )}

            {selectedNode.data.parameters &&
              selectedNode.data.parameters.pool_size !== undefined && (
                <li>
                  <div className="sidebar__info-title">Pool Size:</div>
                  <div className="sidebar__info-data">
                    {selectedNode.data.parameters.pool_size}
                  </div>
                </li>
              )}

            {selectedNode.data.parameters &&
              selectedNode.data.parameters.stride !== undefined && (
                <li>
                  <div className="sidebar__info-title">Stride:</div>
                  <div className="sidebar__info-data">
                    {selectedNode.data.parameters.stride}
                  </div>
                </li>
              )}

            {selectedNode.data.parameters &&
              selectedNode.data.parameters.units !== undefined && (
                <li>
                  <div className="sidebar__info-title">Unit(s):</div>
                  <div className="sidebar__info-data">
                    {selectedNode.data.parameters.units}
                  </div>
                </li>
              )}
          </ul>
        </div>

        <section className="sidebar__watermark">
          <p>Powered by </p>
          <img className="sidebar__logo" src={siteLogo} alt="Mindgard Logo" />
        </section>
      </div>
    </aside>
  );
};

export default SideBar;
