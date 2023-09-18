import "./FcNodes.scss";
import React, { memo, useRef } from "react";
import { Handle, Position } from "reactflow";

const FcNodes = memo(({ data, isConnectable, toggleSidebar }) => {
  return (
    <>
      {isConnectable && (
        <>
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
        </>
      )}
    </>
  );
});

export default FcNodes;
