import { useRef } from "react";
import "./SideBar.scss";
import { ReactFlow } from "reactflow";

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
          <p className="sidebar__title">Node Properties</p>
          <button
            className="sidebar__close-button"
            onClick={handleClose}
            aria-label="Toggle Sidebar"
          >
            X
          </button>
        </div>

        <div className="sidebar__node-info">
          <p>
            Type: {selectedNode.type === "convNode" && "Convolution"}
            {selectedNode.type === "FcNodes" && "Fully Connected"}
            {selectedNode.type === "Pool" && "Pool"}
            {selectedNode.type === "inputCustom" && "Input"}
            {selectedNode.type === "outputCustom" && "Output"}
          </p>

          <p>{` ID: ${selectedNode.id}`}</p>

          <p>{selectedNode.data.parameters !== undefined && "Parameters"}</p>
          {selectedNode.data.parameters &&
            selectedNode.data.parameters.kernel_size !== undefined && (
              <p>{`Kernel Size: ${selectedNode.data.parameters.kernel_size}`}</p>
            )}

          {selectedNode.data.parameters &&
            selectedNode.data.parameters.pool_size !== undefined && (
              <p>{`Pool Size: ${selectedNode.data.parameters.pool_size}`}</p>
            )}

          {selectedNode.data.parameters &&
            selectedNode.data.parameters.stride !== undefined && (
              <p>{`Stride: ${selectedNode.data.parameters.stride}`}</p>
            )}

          {selectedNode.data.parameters &&
            selectedNode.data.parameters.units !== undefined && (
              <p>{`Units: ${selectedNode.data.parameters.units}`}</p>
            )}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
