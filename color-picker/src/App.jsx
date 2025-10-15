import { useState } from "react";

function App() {
  function clickedCircle(event) {
    // console.log(event.target.style.backgroundColor);
    setSelectedColor(event.target.style.backgroundColor);
  }

  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <>
      <section>
        <div className="circleWrapper">
          <div
            className="circle"
            style={{ backgroundColor: "brown" }}
            onClick={clickedCircle}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "green" }}
            onClick={clickedCircle}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "yellow" }}
            onClick={clickedCircle}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "blue" }}
            onClick={clickedCircle}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "grey" }}
            onClick={clickedCircle}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "pink" }}
            onClick={clickedCircle}
          ></div>
        </div>
      </section>

      <div
        className="previewBox"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </>
  );
}

export default App;
