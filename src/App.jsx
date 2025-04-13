import React, { useState } from "react";
import ExpenseForm from "./components/expenseForm.jsx";
import SearchBar from "./components/searchBar.jsx";
import ExpenseTable from "./components/expenseTable.jsx";

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
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold mb-2">Expense Tracker</h1>
      <p className="text-gray-600 mb-6">
        Start taking control of your finances and life. Record, categorize and annalyze your spending.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="md:col-span-3">
          <SearchBar onSearch={handleSearch} />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
