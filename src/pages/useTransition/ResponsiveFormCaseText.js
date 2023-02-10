import React from "react";
import classes from "../../styles/CodeText.module.css";

export default function ResponsiveFormCaseText() {
  const title1 = "Sluggish";
  const text1 = String.raw`export default function ResponsiveFormCaseSluggish() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }

  return (
    <div>
      <label for="input">Input: </label>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <p>Updated input: {input}</p>
      <p>Updated list of {LIST_SIZE} items:</p>

      <ol
        style={{
          height: "6rem",
          maxWidth: "16rem",
          overflow: "auto",
          border: "3px solid lightgray",
        }}
      >    
        {list.map((e) => (<li>{e}</li>))}
      </ol>
    </div>
  );
}`;
  const title2 = "Responsive with useTransition";
  const text2 = String.raw`export default function ResponsiveFormCaseUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div>
      <label for="input">Input: </label>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <p>Updated input: {input}</p>
      <p>Updated list of {LIST_SIZE} items:</p>
      {isPending 
        ? ("Loading...") 
        : (<ol
          style={{
            height: "6rem",
            maxWidth: "16rem",
            overflow: "auto",
            border: "3px solid lightgray",
          }}
        >
          {list.map((e) => (<li>{e}</li>))}
        </ol>)
      }
    </div>
  );
}`;

const title3 = "My Exercise";
const text3 = String.raw`export default function ResponsiveFormCaseMine() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  }
  return (
    <div>
      <label for="input">Input: </label>
      <input id="input" type="text" value={input} onChange={handleChange} />
      <p>Updated input: {input}</p>
      <p>Updated list of {LIST_SIZE}:</p>
      {isPending 
        ? ("Loading...") 
        : (<ol 
          style={{
            overflow: "auto",
            border: "3px solid lightgray",
            height: "6rem",
          }}
        >
            {list.map((item) => (<li>{item}</li>))}
        </ol>)
      }
    </div>
  );
}`
  return (
    <div className={classes.horizontalFlex}>
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
