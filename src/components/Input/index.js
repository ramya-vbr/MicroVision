import React from 'react';
import "./input.css";

export default function InputField({ label, name, value, onChange,className,placeholder, error, type = 'text', ...props }) {
    return (
      <div className="input-container">
        <label className="input-label">{label}</label>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={className}
          {...props}
        />
        {error && <p className="input-error">{error}</p>}
      </div>
    );
  }
  