import React, { useState } from 'react'

const initialUserInput = {
    'current-savings': 1000,
    'yearly_savings': 1000,
    'expected_interest' : 7,
    'investment_total': 1700
} 

const InvestmentForm = () =>{
      const [userInput, setUserInput] =   useState({
            'current-savings': 1000,
            'yearly_savings': 1000,
            'expected_interest' : 7,
            'investment_total': 1700
        });
     
        const submitHandler = (event) => {
            event.preventDefault();
            console.log('Submit Handler');
            console.log('User input', userInput);
          
            // Assuming userInput is an object with numeric properties
            const currentSavings = userInput['current-savings'];
            const yearlySavings = userInput['yearly_savings'];
            const expectedInterest = userInput['expected_interest'];
            console.log('currentSavings =' , currentSavings)
            console.log('yearlySavings =' , yearlySavings)
            console.log('expectedInterest =' , expectedInterest)
            const interest = ((currentSavings + yearlySavings) * expectedInterest) / 100;
            console.log('interest =', interest)
            const total = interest + currentSavings;
          
            setUserInput((...prevInput) => ({
              ...prevInput,
              'investment-total': total
            })); // Added semicolon for clarity
          };
          

    const resetHandler = () =>{
            console.log("Reset Form");
            setUserInput(initialUserInput);
    }


    const inputChangeHandler = (input, value) => {
        console.log('input changes handler called..')
        setUserInput((...prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            }
        })
    }
    return (
        <>
        <h1>Investment Form </h1>
        <form id="investment_form" >
            <div>
                <label htmlFor="current-savings">Currenr Savings</label>
                <input 
                type='number'
                name="current-savings" 
                id = "current-savings"
                value={userInput['current-savings']}
                onChange = {(event)=>inputChangeHandler('current-savings', event.target.value)}
                ></input>
                <label htmlFor="yearly_savings">Yealy Saving</label>
                <input 
                type="number"
                name="yearly_savings"
                id = "yearly_savings"
                value={userInput['yearly_savings']}
                onChange={(event) => inputChangeHandler('yearly-savings', event.target.value)}  
                  ></input>
            </div>
            <div>
                <label htmlFor="expected_intereset">Expected Interest</label>
                <input 
                type="number"
                name="expected_intereset"
                id="expected_intereset"
                value={userInput['expected_interest']}
                onChange={(event) => inputChangeHandler('expected-interest',event.target.value)}
                ></input>
                <label htmlFor="investment_total">Total Savings</label>
                <input 
                type="number"
                name="investment_total"
                value={userInput['investment_total']}
                onChange={(event)=> inputChangeHandler('investment-total', event.target.value)}
                ></input>
            </div>
            <div>
                <button type="reset" onClick={resetHandler}>Reset</button>
                <button type="calculate" onClick={submitHandler}>Calculate</button>
            </div>
        </form>
        </>
    );
}

export default InvestmentForm;