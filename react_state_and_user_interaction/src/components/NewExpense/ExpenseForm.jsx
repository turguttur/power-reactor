import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  const onTitleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  };

  const onAmountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
  };

  const onDateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    // to prevent reload the page
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log('expense data: ', expenseData);
  }

  // console.log('user input: ', userInput);
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={onAmountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={onDateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;