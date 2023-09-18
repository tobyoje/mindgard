import "./Pool.scss";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const Pool = memo(({ data, isConnectable }) => {
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

          <div className="pool">
            <div className="pool__left">P</div>

            <div className="pool__right">
              <p>Pool Size: {data.parameters.pool_size || 0}</p>
              <p>Stride: {data.parameters.stride || 0}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default Pool;
