import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-dark text-white hover:bg-primary-main",
  secondary: "bg-black text-white hover:bg-gray-800",
};

export const CustomButton = ({
  children,
  size = "md",
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "rounded-lg font-semibold transition-all duration-300 cursor-pointer w-full";

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
