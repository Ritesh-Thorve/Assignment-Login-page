import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  isLoading?: boolean;
}

const Button = ({ variant = "primary", isLoading, children, ...props }: ButtonProps) => {
  return (
    <button 
      className={`${variant} ${isLoading ? "disabled" : ""}`} 
      {...props} 
      disabled={isLoading || props.disabled}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
