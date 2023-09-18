import "./Pool.scss";
import React, { memo, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const Pool = memo(({ data, isConnectable }) => {
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
              <div>Type: Pool Size</div>
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

            <div className="pool">
              <div className="pool__left">P</div>

              <div className="pool__right">
                <p>Pool Size: {data.parameters.pool_size || 0}</p>
                <p>Stride: {data.parameters.stride || 0}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default Pool;
