import Link from "next/link";
import React from "react";

interface BreadcrumbLink {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  return (
    <nav className="py-3 mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 flex-wrap">
        {links.map((link, idx) => (
          <li key={idx} className="inline-flex items-center">
            {idx > 0 && (
              <svg
                className="w-5 h-5 text-gray-400 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {link.href ? (
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <span className="text-sm font-semibold text-gray-900">
                {link.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
