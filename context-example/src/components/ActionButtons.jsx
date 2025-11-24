import { useCounter } from "../context/CounterContext";

function ActionButtons() {
  const { setCounter } = useCounter();

  function handleButton() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  return (
    <>
      <button onClick={handleButton}>INCREASE!</button>
    </>
  );
}

export default ActionButtons;
