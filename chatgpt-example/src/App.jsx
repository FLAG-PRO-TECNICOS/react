import { useState } from "react";

const API_KEY = "sk-proj-...";

function App() {
  const [textInput, setTextInput] = useState("");
  const [joke, setJoke] = useState("");

  function handleClick() {
    const data = {
      model: "gpt-5.1",
      input: `
          My expense is "${textInput}"
          what would be a category for a finance tracking app
          - Give me just the category text
        `,
    };

    const url = "https://api.openai.com/v1/responses";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.output[0].content[0].text);
        setJoke(result.output[0].content[0].text);
      });
  }

  return (
    <>
      <input
        placeholder="title"
        value={textInput}
        onChange={(evt) => setTextInput(evt.target.value)}
      />
      <p>{textInput}</p>
      <p>Category: {joke}</p>
      <button onClick={handleClick}>CLICK ME FOR AI! 🤖</button>
    </>
  );
}

export default App;
