import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { _mockCategories } from "../_mock/_category";
import { iconMap } from "../utils/iconMap";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarCategories = ({ isOpen, setIsOpen }: SidebarProps) => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 z-50 
          flex flex-col items-start py-4
          sm:translate-x-0
          ${!isOpen ? "-translate-x-full sm:translate-x-0" : "translate-x-0"}
        `}
        animate={{
          width: isOpen ? 200 : 70,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onMouseEnter={() => {
          if (isDesktop) {
            setIsOpen(true);
          }
        }}
        onMouseLeave={() => {
          if (isDesktop) {
            setIsOpen(false);
          }
        }}
      >
        <div className="w-full px-2 mb-6 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex items-center h-[46px] w-full"
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#4da6ff] rounded-full shadow-md"
              initial={false}
              animate={{ width: isOpen ? "100%" : "46px" }}
              transition={{
                width: {
                  duration: isOpen ? 0.013 : 0.15,
                  ease: isOpen ? "easeOut" : "easeIn",
                },
              }}
            />

            <div className="relative flex items-center w-full">
              <div className="flex items-center justify-center w-[46px] h-[46px] flex-shrink-0 text-white z-10">
                <span className="sm:hidden">
                  {isOpen ? (
                    <IoClose className="text-2xl" />
                  ) : (
                    <GiHamburgerMenu className="text-2xl" />
                  )}
                </span>
                <span className="hidden sm:block">
                  <GiHamburgerMenu className="text-2xl" />
                </span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-sm font-medium tracking-wide whitespace-nowrap text-white z-10"
                  >
                    All Categories
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4 w-full">
          {_mockCategories.map((cat, i) => {
            const Icon = iconMap[cat.iconName];

            return (
              <div
                key={i}
                className="relative flex items-center h-[46px] mx-2 cursor-pointer group"
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth < 640
                  ) {
                    setIsOpen(false);
                  }
                }}
              >
                <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="relative flex items-center w-full">
                  <div className="flex items-center justify-center w-[46px] h-[46px] flex-shrink-0 text-gray-700 z-10">
                    {Icon && <Icon className="text-xl" />}
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="text-sm font-medium whitespace-nowrap text-gray-700 z-10"
                      >
                        {cat.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </motion.aside>
    </>
  );
};

export default SidebarCategories;
