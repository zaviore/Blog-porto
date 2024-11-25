// components/Navbar.tsx
"use client";

import { usePageContext } from "@/context/pageContext";
import ThemeToggle from "../themeToogle";

function Navbar({ pages }: { pages: { id: number; title: string; content: unknown }[] }) {
  const { currentPage, setCurrentPage } = usePageContext();

  return (
    <div className="bg-light-background text-light-text dark:bg-slate-900 dark:text-dark-text shadow-md">
      <div className="flex px-5 items-center justify-between container mx-auto h-16">
        <div className="font-bold">ZAMHADI</div>
        <div className="flex gap-3 items-center">
          <ThemeToggle/>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`px-3 py-1 rounded ${
                currentPage === page.id ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => setCurrentPage(page.id)}
            >
              {page.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
