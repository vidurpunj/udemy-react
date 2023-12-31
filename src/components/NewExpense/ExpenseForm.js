import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [eneterdTitle, setEneterdTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {
            title: eneterdTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        setEneterdTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(formData);
    }
    const eventChangeHandler = (identifier, event) => {
        if (identifier === 'title') {
            setEneterdTitle(event.target.value);
            console.log('Title Changed');
        } else if (identifier === 'amount') {
            setEnteredAmount(event.target.value);
            console.log('Amount Changed')
        }
        else if (identifier === 'date') {
            setEnteredDate(event.target.value);
            console.log('Date Changed')
        }
    }
    const cancelExpense = () => {
        props.cancelNewExpense();
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={eneterdTitle}
                        onChange={(event) => { eventChangeHandler('title', event) }}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount}
                        min='0.01' step='0.01' onChange={(event) => { eventChangeHandler('amount', event) }} />
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate}
                        min='2019-01-01' max='2023-01-01' onChange={(event) => { eventChangeHandler('date', event) }} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelExpense} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;