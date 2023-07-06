import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () =>{
    const expenses = [
        { id: 123, name: 'shoping', cost: 200 },
        { id: 456, name:'rent', cost: 300 },
        { id: 789, name: 'food', cost: 250 },
        { id: 101, name: 'transportation', cost: 50 },
    ]

    return (
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem 
                    key={ expense.id }
                    id={ expense.id }
                    name={ expense.name }
                    cost={ expense.cost }
                />
            ))}    
        </ul>
    );
}

export default ExpenseList;
