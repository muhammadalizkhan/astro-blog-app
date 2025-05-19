import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate page numbers with ellipsis logic if needed (for large number of pages)
  const createPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 3) {
        pages.push(1);
        if (currentPage > 4) pages.push("...");
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const pageNumbers = createPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center gap-2 mt-8">
      <button
        className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition text-zinc-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Prev
      </button>
      {pageNumbers.map((num, i) =>
        typeof num === "number" ? (
          <button
            key={num}
            className={`px-3 py-1 rounded transition ${
              num === currentPage
                ? "bg-blue-600 text-white font-semibold"
                : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
            }`}
            onClick={() => onPageChange(num)}
            aria-current={num === currentPage ? "page" : undefined}
          >
            {num}
          </button>
        ) : (
          <span key={i} className="px-2 text-zinc-500 select-none">
            ...
          </span>
        )
      )}
      <button
        className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition text-zinc-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}