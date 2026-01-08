"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface IDEContextType {
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  terminalHistory: string[];
  addTerminalLine: (line: string) => void;
  clearTerminal: () => void;
  isCommandPaletteOpen: boolean;
  toggleCommandPalette: () => void;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  setTerminalOpen: (open: boolean) => void;
}

const IDEContext = createContext<IDEContextType | undefined>(undefined);

export const IDEProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Welcome to the portfolio terminal! Type "help" to start.',
  ]);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const router = useRouter();

  const toggleTerminal = () => setIsTerminalOpen((prev) => !prev);
  const setTerminalOpen = (open: boolean) => setIsTerminalOpen(open);

  const addTerminalLine = (line: string) => {
    setTerminalHistory((prev) => [...prev, line]);
  };

  const clearTerminal = () => {
    setTerminalHistory([]);
  };

  const toggleCommandPalette = () => setIsCommandPaletteOpen((prev) => !prev);
  const toggleMobileSidebar = () => setMobileSidebarOpen((prev) => !prev);

  // Command Palette Keyboard Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <IDEContext.Provider
      value={{
        isTerminalOpen,
        toggleTerminal,
        terminalHistory,
        addTerminalLine,
        clearTerminal,
        isCommandPaletteOpen,
        toggleCommandPalette,
        isMobileSidebarOpen,
        toggleMobileSidebar,
        setTerminalOpen,
      }}
    >
      {children}
    </IDEContext.Provider>
  );
};

export const useIDE = () => {
  const context = useContext(IDEContext);
  if (context === undefined) {
    throw new Error("useIDE must be used within a IDEProvider");
  }
  return context;
};
