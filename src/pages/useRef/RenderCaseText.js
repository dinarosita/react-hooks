import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function RenderCaseText() {
  const title1 = "useRef";
  const text1 = String.raw`export default function RenderCase() {
  const [name, setName] = useState("Dina");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
      setRenderCount(prevRenderCount => prevRenderCount +1)
  })

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <div>Name: {name}</div>
      <div>Render count: {renderCount.current}</div>
    </div>
  );
}`;
  const title2 = "Don't use useState like this";
  const text2 = String.raw`export default function RenderCase() {
  const [name, setName] = useState("Dina");
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
      setRenderCount(prevRenderCount => prevRenderCount +1)
  })

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <div>Name: {name}</div>
      <div>Render count: {renderCount.current}</div>
    </div>
  );
}`;

  return (
    <div className={classes.hFlex}>
        <div className={classes.codeBox}>
        <pre>{title1}</pre>
        <pre>{text1}</pre>
      </div>
      <div className={classes.codeBox}>
        <pre>{title2}</pre>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
