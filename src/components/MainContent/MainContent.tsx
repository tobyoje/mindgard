import "./MainContent.scss";
import { useCallback, useRef, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import convNode from "../../customnodes/ConvNodes/ConvNodes.js";
import FcNodes from "../../customnodes/FcNodes/FcNodes.js";
import Pool from "../../customnodes/Pool/Pool.js";
import inputCustom from "../../customnodes/Input/Input.js";
import outputCustom from "../../customnodes/Output/Output.js";

import "reactflow/dist/style.css";
import { nodes as initialNodes, edges as initialEdges } from "../../testdata";

const minimapStyle = {
  height: 120,
};

interface MainContentProps {
  toggleSidebar: () => void;
}

const nodeTypes = {
  inputCustom: inputCustom,
  convNode: convNode,
  FcNodes: FcNodes,
  Pool: Pool,
  outputCustom: outputCustom,
};

const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
  const defaultEdgeOptions = { animated: true };

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

        <div className="graph-section">
          <div className="graph-section__container">
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              defaultEdgeOptions={defaultEdgeOptions}
              onNodeClick={handleToggleClick}
              fitView
            >
              <MiniMap style={minimapStyle} zoomable pannable />
              <Controls />
              <Background color="#aaa" gap={16} />
            </ReactFlow>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
