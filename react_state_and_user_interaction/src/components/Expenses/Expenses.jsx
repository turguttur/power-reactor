import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  return props.expenses.map((item, index) => (
    <ExpenseItem
      key={item.key}
      date={item.date}
      title={item.title}
      amount={item.amount}
    ></ExpenseItem>
  ));
}
