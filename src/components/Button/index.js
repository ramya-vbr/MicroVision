import React from 'react';
import "./button.css";

         
export default function Button({ title, onClick,disabled, className, type = 'button', ...props }) {
    return (
      <button type={type} onClick={onClick} disabled={disabled} {...props}  className={className}>
        <div>{title}</div>
      </button>
    );
  }
  