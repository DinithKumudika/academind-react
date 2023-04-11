import React, {useState} from 'react';
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

     const deleteExpenseHandler = (id) => {
          props.onDeleteExpense(id);
     };

     return (
          <Card className="expense-item">
               <ExpenseDate date={props.date} />
               <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
               </div>
               <button onClick={()=> deleteExpenseHandler(props.key)}>Delete</button>
          </Card>
     )
}

export default ExpenseItem;