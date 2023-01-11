import { useState, useEffect } from "react";
import classes from "./UseEffect.module.css";

function UseEffectPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])    
    
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setItems(json));

        return () => {
            console.log("CLEAN UP: Running return first to clean up previous useEffect run such as the event listener.")
        }
    }, [resourceType]);

    return (
    <section>
        <h1>useEffect</h1>
        <ul>
            <li>Guide: <a href="https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2">
                WebDev - Learn useEffect in 13 Minutes
            </a>
            </li>
            <li>Note: <a href="https://dinarosita.github.io/codeyluwak/react_useeffect.html">
                CodeyLuwak: React useEffect
            </a>
            </li>
            <li>App: coding/reactjs/react-hooks</li>
            <li>File: src/pages/useEffect.js</li>
            <li>Learn: Mount - unmount concept.</li>
        </ul>
        <div className={classes.hookbox}>
            <h2>Window width: {windowWidth}</h2>
            <div></div>
        </div>
        <div className={classes.hookbox}>
            <div>
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h2>{resourceType}</h2>
            {items.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
            })}
        </div>
        </section>
    );
}

export default UseEffectPage;
