// Baseado em components
// Declarativo - JSX (JavaScript eXtended)
// Reactivo
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      <h1>My first page!</h1>
      <TextBox text="something" />
      <TextBox text="bom dia malta" />
      <TextBox text="la la la la!" />
    </>
  );
}

export default App;
