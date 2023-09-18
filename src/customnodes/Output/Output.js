import "./Output.scss";
import React, { memo, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const outputustom = memo(({ data, isConnectable }) => {
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
              <div>Type: Output</div>
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

            <div className="output">OUTPUT</div>
          </div>
        </>
      )}
    </>
  );
});

export default outputustom;
