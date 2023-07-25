import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <h2>Let's Start Coding</h2>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
