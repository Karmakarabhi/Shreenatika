"use client";

import React, { useState, useRef, type FC, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler]);
}

interface DropdownItem {
  name: string;
  link: string;
}

interface AnimatedDropdownProps {
  items?: DropdownItem[];
  text?: string;
  className?: string;
}

const DEMO: DropdownItem[] = [
  { name: "Documentation", link: "#" },
  { name: "Components", link: "#" },
  { name: "Examples", link: "#" },
  { name: "GitHub", link: "#" },
];

export default function AnimatedDropdown({
  items = DEMO,
  text = "Select Option",
  className,
}: AnimatedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OnClickOutside onClickOutside={() => setIsOpen(false)}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn("group relative inline-block", className)}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
            "h-10 px-4 py-2",
          )}
        >
          <span>{text}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ChevronDown className="ml-2 h-4 w-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              role="listbox"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className={cn(
                "absolute top-[calc(100%+0.5rem)] left-1/2 z-50 w-fit min-w-full -translate-x-1/2",
                "overflow-hidden rounded-md",
                "bg-background border border-border",
                "shadow-lg",
              )}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.03,
                    },
                  },
                }}
              >
                {items.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={cn(
                      "inline-block w-full px-4 py-2.5 text-sm",
                      "border-b border-border last:border-b-0",
                      "bg-background hover:bg-accent hover:text-accent-foreground",
                      "transition-colors duration-150",
                      "text-foreground no-underline",
                    )}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OnClickOutside>
  );
}

interface Props {
  children: ReactNode;
  onClickOutside: () => void;
  classes?: string;
}

const OnClickOutside: FC<Props> = ({ children, onClickOutside, classes }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, onClickOutside);

  return (
    <div ref={wrapperRef} className={cn(classes)}>
      {children}
    </div>
  );
};
