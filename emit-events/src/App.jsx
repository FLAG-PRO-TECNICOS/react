import { useState } from "react";
import NumberDisplay from "./components/NumberDisplay";
import ButtonUp from "./components/ButtonUp";
import ShoutingDiv from "./components/ShoutingDiv";
import TextField from "./components/TextField";

function App() {
  const [number, setNumber] = useState(0);

  function handleDealWithIt(event) {
    setNumber(number + 1);
  }

  const [text, setText] = useState("qwertyui");

  return (
    <>
      <button onClick={() => setText("YAY!!!!!")}>yay!</button>

      <NumberDisplay number={number} />
      <ButtonUp dealWithIt={handleDealWithIt} />
      <hr />

      <TextField
        textFieldValue={text}
        onTextFieldChange={(value) => setText(value)}
      />
      <ShoutingDiv content={text} />
    </>
  );
}

export default App;
