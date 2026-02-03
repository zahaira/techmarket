"use client";

import React, { useState } from "react";

interface QuantitySelectorProps {
  name?: string;
  quantity: number;
  disabledIncrease?: boolean;
  disabledDecrease?: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange?: (value: number) => void;
  max: number;
  size?: "sm" | "md" | "lg";
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
  quantity,
  onIncrease,
  onDecrease,
  disabledIncrease,
  disabledDecrease,
  onChange,
  max,
  size = "md",
}: QuantitySelectorProps) => {
  const classes = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 1;
    val = Math.max(1, Math.min(val, max));
    onChange?.(val);
  };

  return (
    <div className="flex border border-gray-400 text-gray-700 rounded-full overflow-hidden w-max bg-gray-50">
      <button
        type="button"
        disabled={disabledDecrease}
        className={`py-1 transition ${classes.btn} ${
          disabledDecrease
            ? "text-gray-400"
            : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={onDecrease}
      >
        -
      </button>

      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        // readOnly={isOutOfStock}
        className={`text-center focus:outline-none bg-gray-50 ${classes.input}`}
      />

      <button
        type="button"
        disabled={disabledIncrease}
        className={`py-1 transition ${classes.btn} ${
          disabledIncrease
            ? "text-gray-400"
            : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
