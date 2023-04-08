import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

     const [title, setTitle] = useState('');
     const [amount, setAmount] = useState('');
     const [date, setDate] = useState('');

     const titleChangeHandler = (e) => {
          setTitle(e.target.value);
          console.log(title);
     };

     const amountChangeHandler = (e) => {
          setAmount(e.target.value);
          console.log(amount);
     };

     const dateChangeHandler = (e) => {
          setDate(e.target.value);
          console.log(date);
     };

     const submitHandler = (e) => {
          e.preventDefault();

          const expenseData = {
               title: title,
               amount: amount,
               date: new Date(date)
          };

          setTitle('');
          setAmount('');
          setDate('');
     };

     return (
          <form action="" method='post' onSubmit={submitHandler}>
               <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                         <label htmlFor="">Expense Title</label>
                         <input type="text" onChange={titleChangeHandler} required value={title} />
                    </div>
                    <div className='new-expense__control'>
                         <label htmlFor="">Amount</label>
                         <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} required value={amount} />
                    </div>
                    <div className='new-expense__control'>
                         <label htmlFor="">Date</label>
                         <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} required value={date} />
                    </div>
                    <div className='new-expense__actions'>
                         <button type='submit'>Add Expense</button>
                    </div>
               </div>
          </form>
     )
}

export default ExpenseForm;