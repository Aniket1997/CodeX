"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {text}
      </motion.div>
    </div>
  );
}

export default Tooltip;
