import React from "react";
import classes from "../../../layout/Page.module.css";

export default function LayoutEffectPopupCodes() {
  const title1 = "useEffect";
  const text1 = String.raw`...

function PopupEffect() {
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
...`;
  const title2 = "useLayoutEffect";
  const text2 = String.raw`...

function PopupLayoutEffect() {
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
...`;

const title3 = "without effect";
const text3 = String.raw`...

function PopupWithoutEffect() {
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
}
...`;

  return (
    <div className={classes.flexbox}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
    </div>
  );
}
