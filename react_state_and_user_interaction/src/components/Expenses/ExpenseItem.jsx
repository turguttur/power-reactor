import React, { useState } from "react";

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {
  console.log("Rendered!")
  const [title, setTitle] = useState(props.title);
  const date = props.date;
  const amount = props.amount;
  const clickHandler = () => {
    setTitle('Burcummm!')
  }

  console.log("title: ", title);
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
