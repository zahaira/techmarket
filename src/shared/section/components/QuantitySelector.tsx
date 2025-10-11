"use client";
import React, { useState } from "react";

interface QuantitySelectorProps {
  stock: number;
  initial?: number;
  onChange?: (quantity: number) => void;
}

const QuantitySelector = ({
  stock,
  initial = 1,
  onChange,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(initial);

  const decrement = () => {
    setQuantity((q) => {
      const newQ = Math.max(1, q - 1);
      onChange?.(newQ);
      return newQ;
    });
  };

  const increment = () => {
    setQuantity((q) => {
      const newQ = Math.min(stock, q + 1);
      onChange?.(newQ);
      return newQ;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 1;
    value = Math.max(1, Math.min(stock, value)); // limite entre 1 et stock
    setQuantity(value);
    onChange?.(value);
  };

  return (
    <div className="flex border border-gray-400 text-gray-700 rounded-full overflow-hidden w-max bg-gray-50">
      {/* Bouton - */}
      <button
        type="button"
        className={`px-3 py-1 transition ${
          quantity <= 1 ? " text-gray-400" : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={decrement}
      >
        -
      </button>

      {/* Input */}
      <input
        type="text"
        className="w-12 text-center focus:outline-none bg-gray-50"
        value={quantity}
        onChange={handleChange}
      />

      {/* Bouton + */}
      <button
        type="button"
        className={`px-3 py-1 transition ${
          quantity >= stock
            ? " text-gray-400"
            : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
