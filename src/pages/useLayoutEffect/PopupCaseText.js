import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function PopupCaseText() {
  const title1 = "useEffect";
  const text1 = String.raw`function PopupCaseEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    slowFunction(5);
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = \`\${bottom + 25}px\`;
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        useEffect
      </button>
      {show && (
        <div
          style={{ position: "absolute" }}
          ref={popup}
        >
          useEffect popup
        </div>
      )}
    </div>
  );
}
`;
  const title2 = "useLayoutEffect";
  const text2 = String.raw`function PopupCaseLayoutEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    slowFunction(5);
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = \`\${bottom + 25}px\`;
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        useLayoutEffect
      </button>
      {show && (
        <div
          style={{ position: "absolute" }}
          ref={popup}
        >
          useLayoutEffect popup
        </div>
      )}
    </div>
  );
}
`;

const title3 = "without effect";
const text3 = String.raw`function PopupCaseWithoutEffect() {
  const [show, setShow] = useState(true);
  const popup = useRef();
  const button = useRef();

  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Without effect
      </button>
      {show && (
        <div
          style={{ position: "absolute" }}
          ref={popup}
        >
          Popup without effect
        </div>
      )}
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
      <div className={classes.codeBox}>
        <pre>{title3}</pre>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
