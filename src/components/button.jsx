// src/components/Button.jsx
import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", onClick, disabled }) => {
  const base = "px-4 py-2 rounded font-semibold transition transform hover:scale-105 active:scale-95";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={clsx(base, styles[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
