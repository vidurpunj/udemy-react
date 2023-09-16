import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle]= useState(props.title);

    // const [price, setPrice] = React.useState(props.price)
    // const updatePrice = () => {
    //     setPrice(75);
    // } 
    // const clickHandler = () => {
    //     setTitle(title + ' Updated');
    //     console.log('Button Licked!!');
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </div>
            <div>
            {/* <p>${price || 100}</p>
            <button onClick={updatePrice}>Apply Discount</button> */}
        </div>
        </Card>
        
    )
}
export default ExpenseItem;