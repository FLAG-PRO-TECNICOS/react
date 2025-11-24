import ActionButtons from "./components/ActionButtons";
import BigCounterBox from "./components/BigCounterBox";
import SmallCounterBox from "./components/SmallCounterBox";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <>
      <CounterProvider>
        <div>
          <BigCounterBox />
        </div>
        <div>
          <SmallCounterBox />
        </div>
        <div>
          <ActionButtons />
        </div>
      </CounterProvider>
    </>
  );
}

export default App;
