import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './data/expenses';

const App = () => {
  const [expenseList, setExpenseList] = useState(expenses);

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    console.log(`expense with id:${id} deleted!`);
    setExpenseList(updatedExpenses);
  }

  const addExpenseHandler = (expense) => {
    console.log("in app js" + expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} onDeleteExpense={deleteExpenseHandler} />
    </div>
  )
}

export default App;
