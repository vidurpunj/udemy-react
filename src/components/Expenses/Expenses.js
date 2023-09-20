import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilterdYear] = useState('2020');

    let filterInfoText = '2019, 2021 & 2022';

    if (filteredYear == 2019) {
        filterInfoText = '2020, 2021 & 2022';
    } else if (filteredYear === '2020') {
        filterInfoText = '2019, 2021 & 2022';
    } else if (filteredYear === '2021') {
        filterInfoText = '2019, 2020 & 2022'
    } else if (filteredYear === '2022') {
        filterInfoText = '2019, 2020 & 2021'
    }
    const filterChangedHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
        console.log(selectedYear);
    }
    console.log(props.items);
    return (
        <Card className='expenses'>
            <h1>Data of years {filterInfoText} is not included.</h1>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </Card>
    )
}

export default Expenses;