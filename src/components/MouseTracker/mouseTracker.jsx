import useMousePosition from "hooks/MousePosition/mousePosition";
import React from "react";

function MouseTracker() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <p>
        x,y ({x}, {y})
      </p>
    </div>
  );
}

export default MouseTracker;
