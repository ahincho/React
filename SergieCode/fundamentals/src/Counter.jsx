import { useState } from "react";

export const Counter = ({ startAt }) => {
  const [counter, setCounter] = useState(startAt);
  const handleClick = () => {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador</h1>
      <p>{counter}</p>
      <button onClick={handleClick}>Soy un botón</button>
    </>
  )
};