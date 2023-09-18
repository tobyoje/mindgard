import "./ConvNodes.scss";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const convNode = memo(({ data, isConnectable }) => {
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

          <div className="conv-node">
            <div className="conv-node__left">C</div>

            <div className="conv-node__right">
              <p>Kernel Size: {data.parameters.kernel_size || 0}</p>
              <p>Stride: {data.parameters.stride || 0}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default convNode;
