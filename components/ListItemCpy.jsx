import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addItem,deleteItem,clearAll } from '../action';
import NavBar from './NavBar';
import './ListItem.css'

function ListItems()  {
  
  const [list,setList] = useState([]);

  const [inputValue,setInputValue] = useState("");
  

 const getItemValue = (event) =>  {
  setInputValue(event.target.value);
  }

  const addItem = (event) => {
    event.preventDefault();
    setList([...list,inputValue]);
    setInputValue("");
  }

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }

  const clearAll=() => {
    const clearList = [];
    setList(clearList);
  }

  return( <div className='list_data'>
    <NavBar></NavBar>
    <h1>LIST ITEMS</h1>
    <h2>Type in your Milestones for Today</h2>
    <label>Type Here : </label>
    <input type="text" value={inputValue} onChange={getItemValue}></input> <br></br>
    <input type="submit" onClick={addItem}></input>

    <ul className='list'>
      {list.map((array,index) => (
        <li key={index}> {array}
        <button onClick={() => deleteItem(index)}> Delete </button></li>
      ))}
    </ul>

    <button onClick={clearAll}> CLEAR LIST </button>

    </div>
  );
}

export default ListItems
