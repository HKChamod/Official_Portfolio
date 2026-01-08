"use client";
import { useState, useEffect, useRef } from "react";
import { Search, FileCode, FileJson, FileType, ArrowRight } from "lucide-react";
import { useIDE } from "@/context/IDEContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    name: "home.tsx",
    path: "/",
    icon: <FileCode size={16} className="text-vscode-blue" />,
    description: "Portfolio Home",
  },
  {
    name: "about.json",
    path: "/about",
    icon: <FileJson size={16} className="text-vscode-yellow" />,
    description: "Developer details",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: <FileCode size={16} className="text-vscode-yellow" />,
    description: "Recent works",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: <FileType size={16} className="text-vscode-blue" />,
    description: "Get in touch",
  },
];

const CommandPalette = () => {
  const { isCommandPaletteOpen, toggleCommandPalette } = useIDE();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filteredPages = pages.filter(
    (page) =>
      page.name.toLowerCase().includes(query.toLowerCase()) ||
      page.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isCommandPaletteOpen && inputRef.current) {
      inputRef.current.focus();
      setSelectedIndex(0);
    }
  }, [isCommandPaletteOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredPages.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) => (prev - 1 + filteredPages.length) % filteredPages.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredPages[selectedIndex]) {
        router.push(filteredPages[selectedIndex].path);
        toggleCommandPalette();
        setQuery("");
      }
    } else if (e.key === "Escape") {
      toggleCommandPalette();
    }
  };

  return (
    <AnimatePresence>
      {isCommandPaletteOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-24 bg-black/50"
          onClick={toggleCommandPalette}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
            className="w-full max-w-lg bg-[#252526] shadow-2xl rounded-md overflow-hidden border border-[#454545]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#333333] border-b border-[#454545]">
              <Search size={18} className="text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search files by name..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-500 text-sm font-mono"
              />
              <div className="text-xs text-gray-400 bg-[#1e1e1e] px-1.5 py-0.5 rounded border border-[#454545]">
                ESC
              </div>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filteredPages.length > 0 ? (
                filteredPages.map((page, index) => (
                  <div
                    key={page.path}
                    onClick={() => {
                      router.push(page.path);
                      toggleCommandPalette();
                    }}
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer text-sm group ${
                      index === selectedIndex
                        ? "bg-[#37373d] text-white"
                        : "text-[#CCCCCC] hover:bg-[#2a2d2e]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {page.icon}
                      <div className="flex flex-col">
                        <span className="font-bold">{page.name}</span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400">
                          {page.description}
                        </span>
                      </div>
                    </div>
                    {index === selectedIndex && (
                      <ArrowRight size={14} className="text-vscode-blue" />
                    )}
                  </div>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                  No matching files found
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
