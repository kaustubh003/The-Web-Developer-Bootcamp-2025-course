import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(function myEffect() {
    console.log("My Effect was called.");
  },[]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const increment = () => {
    setCount((c) => setCount(c + 1));
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
