import React from "react";

const ExpenseTable = ({ expenses }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-3 border">Expense</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No expenses added yet.
              </td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr key={index} className="odd:bg-gray-100">
                <td className="p-3 border">{expense.name}</td>
                <td className="p-3 border">{expense.description}</td>
                <td className="p-3 border">{expense.category}</td>
                <td className="p-3 border">{expense.amount}</td>
                <td className="p-3 border">{expense.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
