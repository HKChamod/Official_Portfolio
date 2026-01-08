"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useIDE } from "@/context/IDEContext";

const MobileHeader = () => {
  const { isMobileSidebarOpen, toggleMobileSidebar } = useIDE();

  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-[#252526] text-vscode-text border-b border-black/20">
      <span className="font-bold text-sm">VS Code Portfolio</span>
      <button onClick={toggleMobileSidebar}>
        {isMobileSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Drawer for Mobile Navigation */}
      {isMobileSidebarOpen && (
        <div className="fixed top-[57px] left-0 w-64 h-[calc(100vh-57px)] bg-[#252526] z-50 border-r border-black/20 shadow-xl flex flex-col">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              onClick={toggleMobileSidebar}
              className="flex items-center gap-2 hover:text-white"
            >
              <span className="text-vscode-blue">TSX</span> home.tsx
            </Link>
            <Link
              href="/about"
              onClick={toggleMobileSidebar}
              className="flex items-center gap-2 hover:text-white"
            >
              <span className="text-vscode-yellow">JSON</span> about.json
            </Link>
            <Link
              href="/projects"
              onClick={toggleMobileSidebar}
              className="flex items-center gap-2 hover:text-white"
            >
              <span className="text-vscode-yellow">JS</span> projects.js
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileSidebar}
              className="flex items-center gap-2 hover:text-white"
            >
              <span className="text-vscode-blue">CSS</span> contact.css
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
