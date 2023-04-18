import React from 'react';
import data from './data.json';
import { VictoryPie } from 'victory-pie';

const savings = data.income - data.savings;

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

const PieChart = ({ onSliceSelection }) => {


const handleSliceClick = (event, slice) => {
const { x } = slice.datum;
onSliceSelection(x); // Pass selected slice data to parent component
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
</div>
);
};

export default PieChart;