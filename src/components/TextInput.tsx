import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          {...props}
          className={`peer w-full p-3 text-gray-800 border rounded outline-none
            ${error ? "border-red-500" : "border-gray-300"}
            focus:ring-2 focus:ring-primary-dark focus:border-transparent`}
        />
        <label
          htmlFor={props.name}
          className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600 
                   peer-focus:text-primary-dark transition-colors"
        >
          {label}
        </label>
        {error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
