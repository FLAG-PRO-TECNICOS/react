function ButtonUp({ dealWithIt }) {
  function handleClick(event) {
    dealWithIt(event);
  }

  return (
    <>
      <button onClick={handleClick}>UP</button>
    </>
  );
}

export default ButtonUp;
