"use client";
import Button from "@/components/Button";
import Count from "@/components/Count";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>Counter App</h1>
      <Count count={count} />
      <Button label="Increment" onClick={increment} />
      {" | "}
      <Button label="Decrement" onClick={decrement} />
      {" | "}
      <Button label="Reset" onClick={reset} />
    </>
  );
}
