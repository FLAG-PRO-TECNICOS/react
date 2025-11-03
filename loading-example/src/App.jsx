import { useEffect, useState } from "react";
import Example from "./components/Example";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCategories(result);
        setIsLoading(false);
      });
  }, []);

  // function handleButtonClick() {
  //   setIsLoading(false);
  // }

  return (
    <>
      <Example />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>The list:</h2>
          <ul>
            {categories.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
