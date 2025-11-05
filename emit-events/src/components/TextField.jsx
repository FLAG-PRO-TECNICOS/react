function TextField({ textFieldValue, onTextFieldChange }) {
  function handleChange(event) {
    onTextFieldChange(event.target.value);
  }

  return (
    <>
      <input
        placeholder="something"
        onChange={handleChange}
        value={textFieldValue}
      />
    </>
  );
}

export default TextField;
