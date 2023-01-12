import { useState, useEffect } from "react";

function UseEffectWidthPage() {
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
    </div>
  );
}

export default UseEffectWidthPage;
