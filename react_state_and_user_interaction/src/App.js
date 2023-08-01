import logo from "./logo.svg";
import "./App.css";
import "./components/Expenses/Expenses.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { key: 'e1', date: new Date(2022, 1, 23), title: "PS5", amount: 324.2 },
    { key: 'e2', date: new Date(2023, 11, 13), title: "TV", amount: 224.2 },
    { key: 'e3', date: new Date(2023, 7, 3), title: "Airfryer", amount: 424.2 },
  ];

  return (
    <div className="App">
      <h2>Let's Start Coding</h2>
      <NewExpense />
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
