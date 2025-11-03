import { useState } from "react";

function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <label>
        Enabled
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </label>

      <input disabled={!isChecked} type="text" placeholder="Your name here" />

      {isChecked && <div>EU SO EXISTO SE A CHECKBOX ESTIVER COM CHECK!</div>}

      {isChecked ? <p>LIGADO!!!!</p> : <p>DESLIGADO</p>}

      <div className={`box ${isChecked ? "green" : "red"}`}></div>
    </>
  );
}

export default Example;
