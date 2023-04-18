import React, { useState } from 'react';
import expensesData from './expenses.json';
import incomeData from './income.json';
import RangeSlider from './RangeSlider';
import PieChart from './pieChart';
 
function DataDisplay () {
  const [showAll, setShowAll] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [showIncome, setShowIncome] = useState(false);
  const [showSubCategories,setShowSubCategories]  = useState({
    Housing: false,
    Rent: false,
    Transportation: false,
    CarInsurance: false,
    TravelExpenses: false,
    FoodandGroceries: false,
    UtilityBills: false,
    CellPhone: false
  })
  const [selectedValue,setSelectedValue] = useState(null);
  const [currentValue,setCurrentValue] =useState(null);

  const handleSliceSelection = (slice) => {
      if(slice === 'Expenses')
      {
        setShowExpenses(!showExpenses)
      }
    
      if(slice === 'Income')
      {
        setShowIncome(!showIncome);
      }
  };
 
  const handleDisplay = (item) => {
      setCurrentValue(item.price || item.amount);
  }

  const setHandleSubCheckBox = (description) =>  {
    const selectedData = dataToShow.find(item => item.description === description);
    setSelectedValue(selectedData.price || selectedData.amount);
    setShowSubCategories(prevState => ({
      ...prevState,
      [description]: !prevState[description]
    }));

  }
  let dataToShow = [];
  if (showAll) {
    dataToShow = [...expensesData.expenses, ...incomeData.income];
  } else if (showExpenses) {
    dataToShow = expensesData.expenses;
  } else if (showIncome) {
    dataToShow = incomeData.income;
  }
 
 
  return (

    <div className='data'>
      <PieChart onSliceSelection={handleSliceSelection} />
      <div className='data-list'>
        <label>
          <input type="checkbox" checked={showAll} onChange={() => setShowAll(!showAll)} />
          All
        </label>
        <br />
        <label>
          <input type="checkbox" checked={showExpenses} onChange={() => setShowExpenses(!showExpenses)} />
          Expenses
        </label>
        <br />
        <label>
          <input type="checkbox" checked={showIncome} onChange={() => setShowIncome(!showIncome)} />
          Income
        </label>
        <ul>
          {dataToShow.map(item => (
            <label key={item.id}>{
              <label>
              <input type="checkbox" checked={showSubCategories[item.description]} onChange={() => setHandleSubCheckBox(item.description)} onClick={() => handleDisplay(item)} />
              {item.description}
              <br/>
            </label>}</label>
          ))}
        </ul>
      <RangeSlider amount={selectedValue} />
      <div>
        <h4>Current Value {currentValue}</h4>
      </div>
      </div>
      
    </div>
  );
}
 
export default DataDisplay;