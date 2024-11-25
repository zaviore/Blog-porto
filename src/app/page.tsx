
"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/navbar";
import { usePageContext } from "@/context/pageContext";
import PageHome from "./components/home/pageHome";


const pages = [
  { id: 0, title: "Homepage", bg: "bg-blue-500", content:<PageHome/> },
  { id: 1, title: "Work", content: "Explore My Work", bg: "bg-green-500" },
  { id: 2, title: "About Me", content: "Learn More About Me", bg: "bg-purple-500" },
];

export default function Pages() {
  const { currentPage } = usePageContext();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden dark:bg-dark-background dark:text-white">
   
      <Navbar pages={pages}/>
      <motion.div
        className="flex flex-1 h-full"
        initial={{ x: "100%" }}
        animate={{ x: `-${currentPage * 100}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ width: `100%` }}
      >
        {pages.map((page) => (
          <div
            key={page.id}
            className={`h-full w-full flex items-center justify-center`}
            style={{
                flexShrink: 0,
                opacity: currentPage === page.id ? 1 : 0, 
                zIndex: currentPage === page.id ? 1 : 0, 
                transition: "opacity 0.6s ease-in-out",  
              }}
          >
            {currentPage === page.id && <div>{page.content}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
