import { useState } from "react";
import CircleBox from "./components/CircleBox";
import PreviewBox from "./components/PreviewBox";

function App() {
  function clickedCircle(event) {
    setSelectedColor(event.target.style.backgroundColor);
  }

  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <>
      <section>
        <div className="circleWrapper">
          <div onClick={clickedCircle}>
            <CircleBox bgColor="red" />
          </div>
          <div onClick={clickedCircle}>
            <CircleBox bgColor="green" />
          </div>
          <div onClick={clickedCircle}>
            <CircleBox bgColor="blue" />
          </div>
          <div onClick={clickedCircle}>
            <CircleBox bgColor="yellow" />
          </div>
          <div onClick={clickedCircle}>
            <CircleBox bgColor="pink" />
          </div>
          <div onClick={clickedCircle}>
            <CircleBox bgColor="grey" />
          </div>
        </div>
      </section>

      <PreviewBox color={selectedColor} />

      {/* <div
        className="previewBox"
        style={{ backgroundColor: selectedColor }}
      ></div>  */}
    </>
  );
}

export default App;
