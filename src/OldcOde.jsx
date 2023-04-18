import React, { useState } from 'react';
import data from './data.json';
import { VictoryPie } from 'victory-pie';

const savings = data.income - data.savings ;

const myData = [
  { x: 'Expenses', y: data.expenses },
  { x: 'Income', y: data.income },
  { x: 'Savings', y: savings }
];

const styles = {
  labels: { fontSize: 18 },
  parent: { maxWidth: '50%' },
  slices: {
    stroke: 'white',
    strokeWidth: 3,
  },
};

const PieChart = () => {
  const [selectedSlice, setSelectedSlice] = useState(null);
  const [checkboxes, setCheckboxes] = useState({
    Expenses: false,
    Income: false,
  });

  const handleSliceClick = (event, slice) => {
    const { x } = slice.datum;
    setSelectedSlice(x);
    setCheckboxes((prevState) => ({
      ...prevState,
      [x]: !prevState[x],
      All: prevState.Expenses && prevState.Income ? true : false
    }));
  };

  return (
    <div className="pie-chart-container">
      <VictoryPie
        data={myData}
        colorScale={['#1abc9c', '#3498db', '#9b59b6']}
        style={styles}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: handleSliceClick,
            },
          },
        ]}
      />
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={checkboxes.Expenses}
          disabled={!selectedSlice || selectedSlice !== 'Expenses'}
        />
        <label>Expenses</label>
        <br />
        <input
          type="checkbox"
          checked={checkboxes.Income}
          disabled={!selectedSlice || selectedSlice !== 'Income'}
        />
        <label>Income</label>
        <br />
  <input
    type="checkbox"
    checked={checkboxes.All}
    disabled={!checkboxes.Expenses || !checkboxes.Income || !checkboxes.Savings}
  />
  <label>All</label>
      </div>
    </div>
  );
};

export default PieChart;