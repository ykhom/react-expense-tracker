import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShowForm, setShowForm] = useState(false)

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { 
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
    setShowForm(!isShowForm);
  }; 

  const showFormHandler = () => {
    setShowForm(!isShowForm);
  }

  return (
    <div className="new-expense">
      {isShowForm 
      ? <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={showFormHandler}/>
      : <button onClick={showFormHandler}>Add New Expense</button>}
    </div>
  ); 
};

export default NewExpense;
