import React, { useState } from "react";

function WithHover(WrappedComponent) {
  const [isHovered, setHovered] = useState(false);
  return function (props) {
    function handleMouseEnter() {
      setHovered(true);
    }

    function handleMouseLeave() {
      setHovered(false);
    }

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} isHovered={isHovered} />
      </div>
    );
  };
}

export default WithHover;
