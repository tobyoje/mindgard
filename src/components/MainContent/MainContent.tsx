import "./MainContent.scss";
import { useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import convNode from "../../customnodes/ConvNodes/ConvNodes.js";
import FcNodes from "../../customnodes/FcNodes/FcNodes.js";
import Pool from "../../customnodes/Pool/Pool.js";
import inputCustom from "../../customnodes/Input/Input.js";
import outputCustom from "../../customnodes/Output/Output.js";

import "reactflow/dist/style.css";
import { nodes as initialNodes, edges as initialEdges } from "../../testdata";
import SideBar from "../SideBar/SideBar";

const minimapStyle = {
  height: 120,
};

const nodeTypes = {
  inputCustom: inputCustom,
  convNode: convNode,
  FcNodes: FcNodes,
  Pool: Pool,
  outputCustom: outputCustom,
};

const MainContent: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState(null);

  const toggleSidebar = (event: any, node: any) => {
    setShowSidebar(true);
    setSelectedNode(node);
  };

  const defaultEdgeOptions = { animated: true };

  return (
    <>
      <section className="maincontent">
        <div className="graph-section">
          <div className="graph-section__container">
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              defaultEdgeOptions={defaultEdgeOptions}
              onNodeClick={toggleSidebar}
              fitView
            >
              <MiniMap style={minimapStyle} zoomable pannable />
              <Controls />
              <Background color="#aaa" gap={16} />
              {showSidebar && (
                <SideBar
                  selectedNode={selectedNode}
                  setShowSidebar={setShowSidebar}
                />
              )}
            </ReactFlow>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
