import { useState, useEffect } from "react";
// import Button from "./Button";
// import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const onClick = () => setCounter((data) => data + 1);
  const onChange = (event) => setValue(event.target.value);
  console.log("i run all time");
  useEffect(() => {
    console.log("i run only one");
  }, []);
  useEffect(() => {
    if (value !== "" && value.length > 4) console.log("search for", value);
  }, [value]);
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type='string'
        palceholder='Search here'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
