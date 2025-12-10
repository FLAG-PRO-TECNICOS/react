import { useReducer, useState } from "react";
import { counterReducer } from "./reducers/counterReducer";
import { fruitBasketReducer } from "./reducers/fruitBasketReducer";

function App() {
  const [counter, dispatchCounter] = useReducer(counterReducer, 1000);
  const [fruitBasket, dispathFruitBasket] = useReducer(fruitBasketReducer, []);

  const [fruit, setFruit] = useState("");

  function handleClickAdd() {
    dispatchCounter({ type: "ADD_1" });
  }

  function handleClickSub() {
    dispatchCounter({ type: "SUB_1" });
  }

  function handleAddFruit() {
    dispathFruitBasket({ type: "ADD_FRUIT", payload: fruit });
    setFruit("");
  }

  function handleRemoveFruit() {
    dispathFruitBasket({ type: "REMOVE_FRUIT", payload: fruit });
    setFruit("");
  }

  function handleEmptyBasket() {
    dispathFruitBasket({ type: "EMPTY_BASKET" });
  }

  return (
    <>
      <div>MyCounter: {counter}</div>
      <button onClick={handleClickAdd}>ADD!</button>
      <button onClick={handleClickSub}>SUB!</button>

      <hr />
      <input
        placeholder="fruit"
        value={fruit}
        onChange={(evt) => {
          setFruit(evt.target.value);
        }}
      />
      <button onClick={handleAddFruit}>Add Fruit</button>
      <button onClick={handleRemoveFruit}>Remove Fruit</button>
      <button onClick={handleEmptyBasket}>Empty Basket</button>
      <br />
      {fruit}
      <ul>
        {fruitBasket.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
