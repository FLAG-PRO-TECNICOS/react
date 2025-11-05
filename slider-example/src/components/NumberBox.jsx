function NumberBox({ value, onChange }) {
  function handleChange(event) {
    console.log(event.target.value);
    onChange(parseInt(event.target.value));
  }

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min="0"
        max="100"
      />
    </>
  );
}

export default NumberBox;
