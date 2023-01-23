import { useState, useEffect } from "react";

function WidthCase() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window width: {windowWidth}</h2>
      <p>Window addEventListener is added to the useEffect function to fluidly detect the change in the width, then as side effect, the width is displayed back on the screen fluidly.</p>
    </div>
  );
}

export default WidthCase;
