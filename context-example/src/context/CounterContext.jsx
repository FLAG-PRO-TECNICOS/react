import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
