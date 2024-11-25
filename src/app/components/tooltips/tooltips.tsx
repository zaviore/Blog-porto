import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToolstipUI {
  children: ReactNode;
  tooltipText:string;
  position:string;
}
const TooltipWrapper = ({ children, tooltipText, position = "top" }:ToolstipUI) => {
  const [isHovered, setIsHovered] = React.useState(false);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const positionClasses: any = {
    top: "bottom-full mx-auto transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${positionClasses[position]} bg-gray-800 text-white text-sm rounded px-3 py-2 shadow-lg`}
          >
            {tooltipText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TooltipWrapper;
