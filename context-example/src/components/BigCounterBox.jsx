import { useCounter } from "../context/CounterContext";

function BigCounterBox() {
  const { counter } = useCounter();

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
}

export default BigCounterBox;
