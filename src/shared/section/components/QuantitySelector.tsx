"use client";

import React, { useState } from "react";

interface QuantitySelectorProps {
  stock?: number; // stock peut être undefined
  initial?: number;
  size?: "sm" | "md" | "lg";
  onChange?: (quantity: number) => void;
}

const SIZE_CLASSES = {
  sm: {
    btn: "px-1 w-6 h-7 text-sm",
    input: "w-8 h-7 text-sm",
  },
  md: {
    btn: "px-3 w-10 h-10 text-base",
    input: "w-14 h-10 text-base",
  },
  lg: {
    btn: "px-3 w-12 h-12 text-lg",
    input: "w-16 h-12 text-lg",
  },
};

const QuantitySelector = ({
  stock = 0,
  initial = 1,
  size = "md",
  onChange,
}: QuantitySelectorProps) => {
  const safeStock = Math.max(0, stock);
  const [quantity, setQuantity] = useState<number>(
    safeStock > 0 ? Math.min(initial, safeStock) : 0
  );

  const classes = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;
  const isOutOfStock = safeStock === 0;

  const decrement = () => {
    if (isOutOfStock) return;
    setQuantity((q) => {
      const newQ = Math.max(1, q - 1);
      onChange?.(newQ);
      return newQ;
    });
  };

  const increment = () => {
    if (isOutOfStock) return;
    setQuantity((q) => {
      const newQ = Math.min(q + 1, safeStock);
      onChange?.(newQ);
      return newQ;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isOutOfStock) return;
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 1;
    val = Math.max(1, Math.min(val, safeStock));
    setQuantity(val);
    onChange?.(val);
  };

  return (
    <div className="flex border border-gray-400 text-gray-700 rounded-full overflow-hidden w-max bg-gray-50">
      <button
        type="button"
        disabled={isOutOfStock || quantity <= 1}
        className={`py-1 transition ${classes.btn} ${
          isOutOfStock || quantity <= 1
            ? "text-gray-400"
            : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={decrement}
      >
        -
      </button>

      <input
        type="text"
        value={quantity.toString()}
        onChange={handleChange}
        readOnly={isOutOfStock}
        className={`text-center focus:outline-none ${classes.input} ${
          isOutOfStock ? "bg-gray-200" : "bg-gray-50"
        }`}
      />

      <button
        type="button"
        disabled={isOutOfStock || quantity >= safeStock}
        className={`py-1 transition ${classes.btn} ${
          isOutOfStock || quantity >= safeStock
            ? "text-gray-400"
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
