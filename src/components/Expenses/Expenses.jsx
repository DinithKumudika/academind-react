import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import './Expenses.css';

const Expenses = ({items}) => {
     return (
          <Card className="expenses">
               {items.map((expense) => (
                    <ExpenseItem
                         date={expense.date}
                         title={expense.title}
                         amount={expense.amount}
                         key={expense.id}
                    />
               ))}
          </Card>
     )
}

export default Expenses;