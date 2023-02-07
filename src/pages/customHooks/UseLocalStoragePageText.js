import React from "react";
import classes from "../../layout/Global.module.css";

export default function UseLocalStoragePageText() {
  const title1 = "App using regular useState";
  const text1 = String.raw`export default function InputRegular() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Type name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>

      <input
        type="text"
        value={address}
        placeholder="Type address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <p>Address: {address}</p>
    </div>
  );
}`;
  const title2 = "App using custom useLocalStorage";
  const text2 = String.raw`import useLocalStorage from "./useLocalStorage";

export default function InputPersistence() {
  const [name, setName] = useLocalStorage("name", "");
  const [address, setAddress] = useLocalStorage("address", "");

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Type name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>

      <input
        type="text"
        value={address}
        placeholder="Type address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <p>Address: {address}</p>
    </div>
  );
}`;
  const title3 = "useLocalStorage.js";
  const text3 = String.raw`function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}`;

  return (
    <div className={classes.cardGroup}>
      <div>
        <h3>{title1}</h3>
        <pre>{text1}</pre>
      </div>
      <div>
        <h3>{title3}</h3>
        <pre>{text3}</pre>
      </div>
      <div>
        <h3>{title2}</h3>
        <pre>{text2}</pre>
      </div>
    </div>
  );
}
