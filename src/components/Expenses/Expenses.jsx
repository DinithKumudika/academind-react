import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import './Expenses.css';

const Expenses = ({items, onDeleteExpense}) => {
     return (
          <Card className="expenses">
               {items.map((expense) => (
                    <ExpenseItem
                         date={expense.date}
                         title={expense.title}
                         amount={expense.amount}
                         key={expense.id}
                         onDeleteExpense={onDeleteExpense}
                    />
               ))}
          </Card>
     )
}

export default Expenses;