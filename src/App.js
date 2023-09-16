import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  // const [userInput, setUserInput] = useState({
  //   enteredCounter: 0,
  // })
  // const incrementHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredCounter: prevState.enteredCounter + 1,
  //     }
  //   })
  // }
  return (
    <div className="App">
      <NewExpense />
      <Expenses />
      {/* <div>
        <p id="counter">{userInput.enteredCounter}</p>
        <button onClick={incrementHandler}>Increment</button>
      </div> */}
    </div>
  );
}

export default App;
