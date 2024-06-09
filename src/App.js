import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import InvestmentForm from './components/InvestmentCalculator/InvestmentForm';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpensehandler = (enteredAddExpense) => {
    enteredAddExpense.date = new Date(enteredAddExpense.date);
    setExpenses((prevExpenses)=>{
      return [enteredAddExpense, ...prevExpenses]
    })
    console.log('inside App.js');
    console.log(enteredAddExpense);
  }

  return (
    <div className="App">
      {/* <NewExpense onAddExpense={addExpensehandler}/> */}
      {/* <Expenses items={expenses} /> */}
      <InvestmentForm></InvestmentForm>
    </div>
  );
}

export default App;
