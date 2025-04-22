/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { usePageContext } from "@/context/pageContext";

export default function ClientContent({ pages }:any) {
  const { currentPage } = usePageContext();

  return (
    <motion.div
      className="flex flex-1 h-full"
      initial={{ x: "100%" }}
      animate={{ x: `-${currentPage * 100}%` }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ width: `100%` }}
    >
      {pages.map((page:any) => (
        <div
          key={page.id}
          className="h-full w-full flex items-center justify-center"
          style={{
            flexShrink: 0,
            opacity: currentPage === page.id ? 1 : 0,
            zIndex: currentPage === page.id ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
          }}
        >
          {currentPage === page.id && page.content}
        </div>
      ))}
    </motion.div>
  );
}
