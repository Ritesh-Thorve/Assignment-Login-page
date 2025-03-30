import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; // Button styles
  isLoading?: boolean; // Show a loading state
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", isLoading, children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`} {...props} disabled={isLoading || props.disabled}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
