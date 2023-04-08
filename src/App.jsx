import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './data/expenses';

const App = () => {
  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
