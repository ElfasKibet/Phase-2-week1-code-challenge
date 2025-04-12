import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount && formData.date) {
      onAddExpense(formData);
      setFormData({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter expense name"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter expense description"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter expense category"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Enter expense amount"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-black text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
