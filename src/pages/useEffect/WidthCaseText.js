import React from 'react'
import classes from "../../styles/CodeText.module.css";

export default function WidthCaseText() {
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
    <div className={classes.horizontalFlex}>
        <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
    </div>
  )
}
