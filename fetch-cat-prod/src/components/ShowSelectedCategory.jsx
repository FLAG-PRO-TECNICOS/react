function ShowSelectedCategory({ category }) {
  return (
    <>
      {category ? (
        <p>MOSTRAR AQUI A CATEGORIA ESCOLHIDA: {category}</p>
      ) : (
        <p>AINDA NAO ESCOLHESTE CATEGORIA...</p>
      )}
    </>
  );
}

export default ShowSelectedCategory;
