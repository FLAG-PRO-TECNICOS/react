function Slider() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <input type="range" onChange={handleChange} min="0" max="100" />
    </>
  );
}

export default Slider;
