import { useTranslations } from "next-intl";
import React from "react";

interface NewBadgeProps {
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "text-[10px] px-1.5 py-0.5",
  md: "text-xs px-2 py-0.5",
  lg: "text-sm px-3 py-1",
};

const NewBadge: React.FC<NewBadgeProps> = ({ size = "md" }) => {
  const tShop = useTranslations("shop");
  return (
    <div
      className={`rounded-full bg-green-500 font-bold text-green-50 shadow w-max ${sizeStyles[size]}`}
    >
      {tShop("new")}
    </div>
  );
};

export default NewBadge;
