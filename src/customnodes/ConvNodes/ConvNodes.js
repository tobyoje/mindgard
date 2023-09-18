import "./ConvNodes.scss";
import React, { memo, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const convNode = memo(({ data, isConnectable }) => {
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
              <div>Type: Convolution</div>
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

            <div className="conv-node">
              <div className="conv-node__left">C</div>

              <div className="conv-node__right">
                <p>Kernel Size: {data.parameters.kernel_size || 0}</p>
                <p>Stride: {data.parameters.stride || 0}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default convNode;
