import React, { useState } from "react";
import ExpenseForm from "./components/expenseForm.jsx";
import SearchBar from "./components/searchBar.jsx";
import ExpenseTable from "./components/expenseTable.jsx";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>
      <p className="app-subtitle">
        Start taking control of your finances and life. Record, categorize and
        analyze your spending.
      </p>
      <div className="main-layout">
        <div className="left-panel">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-panel">
          <SearchBar onSearch={handleSearch} />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
