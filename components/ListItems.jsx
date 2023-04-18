import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addItem,deleteItem,clearAll } from '../action';
import NavBar from './NavBar';
import './ListItem.css'

function ListItems()  {

  // const [list,setList] = useState([]); // DONT NEED THIS AS WE ARE GOING TO STORE LIST IN REDUX STORE

  const [inputValue,setInputValue] = useState("");

  const list = useSelector(state => state.list);
  const dispatch = useDispatch();
  

 const getItemValue = (event) =>  {
  setInputValue(event.target.value);
  }

  const handleAddItem = (event) => {
    event.preventDefault();
    //setList([...list,inputValue]);
    dispatch(addItem(inputValue));
    setInputValue("");
  }

  const handleDeleteItem = (index) => {
    //const newList = [...list];
    //newList.splice(index,1);
    //setList(newList);
    dispatch(deleteItem(index));
  }

  const handleClearAll=() => {
    //const clearList = [];
    //setList(clearList);
    dispatch(clearAll());
  }

  return( <div className='list_data'>
    <NavBar></NavBar>
    <h1>LIST ITEMS</h1>
    <h2>Type in your Milestones for Today</h2>
    <label>Type Here : </label>
    <input type="text" value={inputValue} onChange={getItemValue}></input> <br></br>
    <input type="submit" onClick={handleAddItem}></input>

    <ul className='list'>
      {list.map((array,index) => (
        <li key={index}> {array}
        <button onClick={() => handleDeleteItem(index)}> Delete </button></li>
      ))}
    </ul>

    <button onClick={handleClearAll}> CLEAR LIST </button>

    </div>
  );
}

export default ListItems
