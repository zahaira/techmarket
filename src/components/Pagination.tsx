"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  // Function to generate page numbers to display
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];

    // Always show the first page
    range.push(1);

    // Calculate range around current page
    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    // Always show the last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Add "..." where necessary
    let prev = 0;
    for (const page of range) {
      if (typeof page === "number") {
        if (prev && page - prev > 1) {
          rangeWithDots.push("...");
        }
        rangeWithDots.push(page);
        prev = page;
      }
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center items-center gap-1 mt-12" aria-label="Pagination">
      {/* Previous Button */}
      <Link
        href={`?page=${currentPage - 1}`}
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg border-2 transition-all
          ${currentPage === 1
            ? "pointer-events-none opacity-40 border-gray-200 text-gray-400"
            : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-500"}
        `}
        aria-disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 mx-2">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <div
                key={`dots-${index}`}
                className="flex items-center justify-center w-10 h-10 text-gray-500"
              >
                <MoreHorizontal className="w-5 h-5" />
              </div>
            );
          }

          const isActive = page === currentPage;
          
          return (
            <Link
              key={page}
              href={`?page=${page}`}
              className={`
                flex items-center justify-center min-w-[40px] h-10 px-3 rounded-lg border-2 text-sm font-medium transition-all
                ${isActive
                  ? "border-primary-main text-primary-main bg-light"
                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-500"}
              `}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      <Link
        href={`?page=${currentPage + 1}`}
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg border-2 transition-all
          ${currentPage === totalPages
            ? "pointer-events-none opacity-40 border-gray-200 text-gray-400"
            : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-500"}
        `}
        aria-disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </nav>
  );
}