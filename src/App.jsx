import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './data/expenses';

const App = () => {

  const addExpenseHandler = (expense) => {
    console.log("in app js" + expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
