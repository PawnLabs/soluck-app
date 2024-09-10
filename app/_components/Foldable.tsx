"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Collapsible = ({ style }: { style: string }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <span>Chat</span>
          <motion.svg
            className="h-6 w-6"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
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
              open: { opacity: 1, height: "283px" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ delay: 0.01 }}
            className="overflow-hidden rounded-b-xl border-x-[1px] border-b-[1px] border-black-4 bg-blackish text-white"
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.3 }}
            >
              <p>Content goes here</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
