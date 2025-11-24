import ActionButtons from "./components/ActionButtons";
import BigCounterBox from "./components/BigCounterBox";
import SmallCounterBox from "./components/SmallCounterBox";
import { CounterProvider } from "./context/CounterProvider";

function App() {
  return (
    <>
      <div>
        <BigCounterBox />
      </div>
      <div>
        <SmallCounterBox />
      </div>
      <div>
        <ActionButtons />
      </div>
    </>
  );
}

export default App;
