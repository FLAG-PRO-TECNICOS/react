import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [password, setPassword] = useLocalStorage("pass", "123456");

  function handleClick() {
    setPassword("654321!");
  }

  return (
    <>
      {password}
      <button onClick={handleClick}>SAVE NEW PASSWORD</button>
    </>
  );
}

export default App;
