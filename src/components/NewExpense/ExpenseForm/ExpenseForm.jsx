import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

     const [inputTitle, setInputTitle] = useState('');
     const [inputAmount, setInputAmount] = useState('');

     const titleChangeHandler = (event) => {
          setInputTitle(event.target.value);
     };

     const amountChangeHandler = (event) => {
          const amount = event.target.value;
     };

     const dateChangeHandler = (event) => {
          const date = event.target.value;
     };

     return (
          <form action="" method='post'>
               <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                         <label htmlFor="">Expense Title</label>
                         <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                         <label htmlFor="">Amount</label>
                         <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                         <label htmlFor="">Date</label>
                         <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                    </div>
                    <div className='new-expense__actions'>
                         <button type='submit'>Add Expense</button>
                    </div>
               </div>
          </form>
     )
}

export default ExpenseForm;