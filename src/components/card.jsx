// src/components/Card.jsx
import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 w-full sm:w-1/2 lg:w-1/3">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
