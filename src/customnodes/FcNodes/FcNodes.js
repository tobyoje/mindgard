import "./FcNodes.scss";
import React, { memo, useRef, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const FcNodes = memo(({ data, isConnectable, toggleSidebar }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {isConnectable && (
        <>
          <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <NodeToolbar isVisible={isVisible} position={data.toolbarPosition}>
              <div>Type: Fully Connected</div>
            </NodeToolbar>
            <Handle
              type="source"
              position={Position.Bottom}
              id="a"
              style={{ background: "#555" }}
            />
            <Handle
              type="target"
              position={Position.Top}
              id="b"
              style={{ background: "#555" }}
            />

            <div className="fc-node">
              <div className="fc-node__left">F</div>

              <div className="fc-node__right">
                <p>Units: {data.parameters.units || 0}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default FcNodes;
