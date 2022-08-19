import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenssesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car Insuranse",
    amount: 222.34,
    date: new Date(2022, 8, 16),
  },
  {
    id: 2,
    title: "Food",
    amount: 70.19,
    date: new Date(2020, 8, 9),
  },
  {
    id: 3,
    title: "Internet",
    amount: 7,
    date: new Date(2019, 8, 1),
  },
];

const Expenses = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredYeas, setFilteredYear] = useState("2022");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const filterExpenses = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYeas;
  });

  let expensesContent = <h2 className='expenses__not-found'>Found no expenses.</h2>;

  
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter onFilterExpenses={filterExpenses} />
        <ExpensesChart expenses={filteredExpenses}/>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
