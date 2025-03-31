import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;  
  error?: string; 
}

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input {...props} className={`input-field ${error ? "input-error" : ""}`} />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
