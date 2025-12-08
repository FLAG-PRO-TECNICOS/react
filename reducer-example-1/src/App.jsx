import { useCounter } from "./components/counterContext";

function App() {
  const { counter, counterDispatch } = useCounter();

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => counterDispatch({ type: "increment", value: 10 })}>
        UP
      </button>
      <button onClick={() => counterDispatch({ type: "decrement", value: 10 })}>
        UP
      </button>
    </>
  );
}

export default App;
