import { useCounter } from "../context/CounterContext";

function SmallCounterBox() {
  const { counter } = useCounter();

  return (
    <>
      <h4>{counter}</h4>
    </>
  );
}

export default SmallCounterBox;
