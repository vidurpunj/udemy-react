import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const [addExpense, setAddExpense] = useState(0);
    const addNewExpense = () => {
        setAddExpense(1);
    }
    const cancelNewExpenseFunction = () => {
        setAddExpense(0);
    }

    let output = '';
    if(addExpense === 0){
        output = <button type="submit" onClick={addNewExpense}>Add Expense</button>
    }else{
        output = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelNewExpense={cancelNewExpenseFunction} />
    }
    return (
        <div className="new-expense">
           {output}
        </div>
    )
}

export default NewExpense;