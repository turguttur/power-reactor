import React from "react";
import ExpenseForm from "./ExpenseForm";
import './ExpenseForm.css';

const NewExpense = (props) => {
  return(
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;