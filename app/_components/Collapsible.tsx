"use client";
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleProps {
  style: string;
  title: string;
  h: string;
  children: ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  style,
  title,
  h,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={style}>
      <motion.div
        className={`cursor-pointer border-black-4 bg-blackish p-4 text-white ${
          isOpen ? "border-x-[1px] border-t-[1px]" : "border-[1px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: isOpen ? 0 : 8,
          borderBottomRightRadius: isOpen ? 0 : 8,
        }}
        transition={
          isOpen
            ? { duration: 0 }
            : {
                duration: 0,
              }
        }
      >
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <motion.svg
            className="h-6 w-6"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: h },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ delay: 0 }}
            className={
              "h-full overflow-hidden rounded-b-xl border-x-[1px] border-b-[1px] border-black-4 bg-blackish text-white"
            }
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <div className="h-full w-full">{children}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
