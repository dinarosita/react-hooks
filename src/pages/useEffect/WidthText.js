import React from 'react'

export default function WidthText() {
      const title1 = "WidthCase.js";
  const text1 = String.raw`export default function WidthCase() {
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
      <p>Current window width: {windowWidth}</p>
    </div>
  );
}
`;
  return (
    <div>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
    </div>
  )
}
