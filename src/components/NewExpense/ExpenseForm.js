import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [eneterdTitle, setEneterdTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEneterdTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // })
        console.log(event.target.value);
    }
    const amountChangeHanler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value,
        //     }
        // })
        console.log(event.target.value);
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHanler} />
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2023-01-01' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;