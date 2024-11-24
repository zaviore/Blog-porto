"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface ThemeContextType {
  currentPage: any;
  setCurrentPage: any;
}

export const PageContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const PageContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
const [currentPage, setCurrentPage] = useState(0);



  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = (): ThemeContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};
