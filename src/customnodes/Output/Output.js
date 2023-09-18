import "./Output.scss";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const outputustom = memo(({ data, isConnectable }) => {
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

          <div className="output">OUTPUT</div>
        </>
      )}
    </>
  );
});

export default outputustom;
