import Link from "next/link";
import React from "react";

interface IconWithBadgeProps {
  icon: React.ReactElement;
  count?: number;
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
}

const IconWithBadge = ({
  icon,
  count,
  ariaLabel,
  href,
  onClick,
}: IconWithBadgeProps) => {
  const content = (
    <>
      {icon}
      {count !== undefined && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 grid place-items-center">
          {count}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className="relative cursor-pointer hover:text-blue-600 transition focus:outline-none"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="relative cursor-pointer hover:text-blue-600 transition focus:outline-none"
    >
      {content}
    </button>
  );
};

export default IconWithBadge;
