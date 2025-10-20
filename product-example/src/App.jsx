import Menu from "./components/Menu";
import SimpleMenu from "./components/SimpleMenu";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

function App() {
  return (
    <>
      <SimpleMenu />
      <Menu />

      <div>
        <img src={product.image} alt={product.title} />
        <div>
          <span>Title:</span> {product.title}
        </div>
        <div>
          <span>Price:</span> {product.price}€
        </div>
        <div>
          <span>Description:</span>
          {product.description}
        </div>
        <div>
          <span>Category:</span> {product.category}
        </div>
        <div>
          <span>Rating:</span> {product.rating.rate}
        </div>
      </div>
    </>
  );
}

export default App;
