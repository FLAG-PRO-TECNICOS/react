import { useState } from "react";
import Slider from "./Slider";
import NumberBox from "./NumberBox";

function SliderRow({ value = 0, onChange }) {
  return (
    <>
      <p>Slider Value: {value}</p>
      <Slider value={value} onChange={(v) => onChange(v)} />
      <NumberBox value={value} onChange={(v) => onChange(v)} />
    </>
  );
}

export default SliderRow;
