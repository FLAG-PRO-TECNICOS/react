import { useEffect, useState } from "react";

function App() {
  // EXERCICIO
  // criar uma pagina de produtos filtrados por categoria
  // os produtos sao carregados a partir da api https://dummyjson.com/

  // a lista de categoria e preenchida com o url https://dummyjson.com/products/category-list
  //
  // a lista de produtos varia consoante a categoria escolhida
  // ex: https://dummyjson.com/products/category/laptops

  // sugestao
  // Step 1:
  //
  // Fazer fetch a lista de categorias
  // e preencher a select box quando o componente inicializa

  // Step 2:
  //
  // Criar um listener na select box
  // verificar com console.log por exemplo se conseguimos
  // ver a categoria actual (onChange?)

  // Step 3:
  //
  // ao selecionar uma categoria nova
  // fazer o fetch dos produtos dessa categoria
  // e actualizar a lista
  // concatenamos o nome da categoria no fim do URL:
  // https://dummyjson.com/products/category/...?

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://dummyjson.com/products/category-list";
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      setCategories(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const url = "https://dummyjson.com/products/category/" + selectedCategory;
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      if (result.products.length > 0) {
        setProducts(result.products);
      }
    })();
  }, [selectedCategory]);

  async function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((value) => (
          <option>{value}</option>
        ))}
      </select>

      <p>MOSTRAR AQUI A CATEGORIA ESCOLHIDA: {selectedCategory}</p>

      <ul>
        {products.map((value) => (
          <li>{value.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
