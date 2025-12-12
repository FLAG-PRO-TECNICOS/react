import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  clearCart,
  selectCartItems,
  selectCartCount,
  selectCartSubtotal,
  setQuantity,
} from "./redux/cartSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const subtotal = useSelector(selectCartSubtotal);

  return (
    <div style={{ padding: 16 }}>
      <h1>Cart</h1>
      <p>Items: {count}</p>
      <p>Subtotal: €{subtotal.toFixed(2)}</p>

      <button
        onClick={() =>
          dispatch(
            addItem({ id: "sku_123", name: "Socks", price: 9.99, quantity: 1 })
          )
        }
      >
        Add Socks 🧦🎁
      </button>

      <button
        onClick={() =>
          dispatch(
            addItem({
              id: "sku_321",
              name: "Mario Kart",
              price: 59.99,
              quantity: 1,
            })
          )
        }
      >
        Add Games 🕹️
      </button>

      <button
        onClick={() =>
          dispatch(
            setQuantity({
              id: "sku_123",
              quantity: 20,
            })
          )
        }
      >
        Set Socks to 20
      </button>

      <button onClick={() => dispatch(clearCart())}>Clear</button>

      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {it.name} x {it.quantity} (€{it.price})
            <button onClick={() => dispatch(removeItem(it.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
