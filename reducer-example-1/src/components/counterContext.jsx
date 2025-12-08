import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
