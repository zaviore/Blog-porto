"use client";

import { usePageContext } from "@/context/pageContext";
import ThemeToggle from "../themeToogle";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar({ pages }: { pages: { id: number; title: string; content: unknown }[] }) {
  const { currentPage, setCurrentPage } = usePageContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-light-background text-light-text dark:bg-slate-900 dark:text-dark-text shadow-md z-50">
        <div className="flex px-5 items-center justify-between container mx-auto h-16">
          <div className="font-bold">ZAMHADI</div>
          {/* Hamburger Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:flex gap-3 items-center hidden">

              {pages.map((page) => (
                <button
                  key={page.id}
                  className={`px-3 py-1 rounded ${currentPage === page.id ? "bg-gray-700 text-white" : ""
                    }`}
                  onClick={() => setCurrentPage(page.id)}
                >
                  {page.title}
                </button>
              ))}
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none group"
              >
                {/* Animated Hamburger Lines */}
                <div
                  className={`h-[2px] bg-blue-500 rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2 w-6" : "w-5"
                    }`}
                ></div>
                <div
                  className={`h-[2px] w-6 bg-blue-500 rounded mt-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""
                    }`}
                ></div>
                <div
                  className={`h-[2px] bg-blue-500 rounded mt-1 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2 w-6" : "w-5"
                    }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "200px" : "0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-white dark:bg-slate-800 shadow-lg absolute w-full z-40"
      >
        <div className="flex flex-col items-start gap-3 px-5 py-3">
          {pages.map((page) => (
            <button
              key={page.id}
              className={`px-3 py-1 rounded w-full text-left ${currentPage === page.id ? "bg-gray-700 text-white" : "text-black dark:text-white"
                }`}
              onClick={() => {
                setCurrentPage(page.id);
                setIsOpen(false); // Close menu on selection
              }}
            >
              {page.title}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
