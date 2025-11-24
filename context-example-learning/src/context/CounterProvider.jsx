import { useState } from "react";
import { CounterContext } from "./CounterContext";

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
