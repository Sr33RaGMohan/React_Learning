import React, { useState } from 'react';

function RangeSlider({ selectedValue }) {
  const [value, setValue] = useState(selectedValue);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <div>
      <input type="range" min={selectedValue} max="15000" value={value} onChange={handleSliderChange} />
      <div>Selected value: {value}</div>
    </div>
  );
}

export default RangeSlider;