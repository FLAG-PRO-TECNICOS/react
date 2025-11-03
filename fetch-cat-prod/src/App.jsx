import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ShowSelectedCategory from "./components/ShowSelectedCategory";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    (async () => {
      const url = "https://dummyjson.com/products/category-list";
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      setCategories(result);
    })();
  }, []);

  async function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Select a category</option>
        {categories.map((value) => (
          <option>{value}</option>
        ))}
      </select>

      <ShowSelectedCategory category={selectedCategory} />

      {/* {selectedCategory && <ProductList category={selectedCategory} />} */}

      {selectedCategory ? (
        <ProductList category={selectedCategory} />
      ) : (
        <div>ESCOLHA UMA CATEGORIA MOÇO!</div>
      )}
    </>
  );
}

export default App;
