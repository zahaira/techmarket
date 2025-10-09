import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  categoryId: string;
  name: string;
  slug: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  slugArray: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, slugArray }) => {
  return (
    <nav className="py-3 mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 flex-wrap">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
        </li>
        {items.map((crumb, idx) => (
          <li key={crumb.categoryId} className="inline-flex items-center">
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
            {idx < items.length - 1 ? (
              <Link
                href={`/category/${slugArray.slice(0, idx + 1).join("/")}`}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {crumb.name}
              </Link>
            ) : (
              <span className="text-sm font-semibold text-gray-900">
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
