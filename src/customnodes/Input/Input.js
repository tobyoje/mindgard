import "./Input.scss";
import React, { memo, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const inputCustom = memo(({ data, isConnectable }) => {
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
              <div>Type: Input</div>
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

            <div className="input">INPUT</div>
          </div>
        </>
      )}
    </>
  );
});

export default inputCustom;
