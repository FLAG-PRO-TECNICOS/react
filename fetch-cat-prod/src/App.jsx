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

  return (
    <>
      <select>
        <option>tops</option>
        <option>laptops</option>
        <option>smartphones</option>
      </select>

      <ul>
        <li>Iphone 16 - 1000€</li>
        <li>Android XPTO - 1200€</li>
      </ul>
    </>
  );
}

export default App;
