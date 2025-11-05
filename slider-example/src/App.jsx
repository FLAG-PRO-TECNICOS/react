import { useEffect, useState } from "react";
import SliderRow from "./components/SliderRow";

function App() {
  const [numbers, setNumbers] = useState([0, 0, 50, 0, 34, 0, 0]);
  const [total, setTotal] = useState(0);

  function handleChange(value, index) {
    const tempArray = [...numbers];
    tempArray[index] = value;
    setNumbers(tempArray);
  }

  useEffect(() => {
    // const result = numbers.reduce((a, b) => a * 1 + b * 1, 0);
    // setTotal(result);

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    setTotal(sum);
  }, [numbers]);

  return (
    <>
      {numbers.map((value, i) => (
        <>
          <SliderRow value={value} onChange={(v) => handleChange(v, i)} />
        </>
      ))}
      <p>TOTAL: {total}</p>
    </>
  );
}

// Exericio
// fazer um customEvent para o Slider
// actualizar o valor indicado no paragrafo

export default App;
