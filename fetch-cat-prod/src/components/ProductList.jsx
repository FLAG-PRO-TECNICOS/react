import { useEffect, useState } from "react";

function ProductList({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://dummyjson.com/products/category/" + category;
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      if (result.products.length > 0) {
        setProducts(result.products);
      }
    })();
  }, [category]);

  return (
    <>
      <h2>The List:</h2>
      <ul>
        {products.map((value) => (
          <li>{value.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
