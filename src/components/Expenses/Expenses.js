import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilterdYear] = useState('2020');
    
    let filterInfoText = '2019, 2021 & 2022';
    
    if (filteredYear == 2019){
        filterInfoText = '2020, 2021 & 2022';
    }else if (filteredYear === '2020'){
        filterInfoText = '2019, 2021 & 2022';
    }else if(filteredYear === '2021'){
        filterInfoText = '2019, 2020 & 2022'
    }else if(filteredYear === '2022'){
        filterInfoText = '2019, 2020 & 2021'
    }
    const filterChangedHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
        console.log(selectedYear);
    }
    return (
        <Card className='expenses'>
            <h1>Data of years {filterInfoText} is not included.</h1>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Card>
    )
}

export default Expenses;