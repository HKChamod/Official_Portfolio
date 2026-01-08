"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { X, FileCode, FileJson, FileType } from "lucide-react";
import Link from "next/link";

const tabs = [
  {
    name: "home.tsx",
    path: "/",
    icon: <FileCode size={14} className="text-vscode-blue" />,
  },
  {
    name: "about.json",
    path: "/about",
    icon: <FileJson size={14} className="text-vscode-yellow" />,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: <FileCode size={14} className="text-vscode-yellow" />,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: <FileType size={14} className="text-vscode-blue" />,
  },
];

const TabBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex bg-[#252526] h-9 overflow-x-auto text-sm border-b border-black/10 scrollbar-hide w-full">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.path}
            href={tab.path}
            className={`
                    flex items-center gap-2 px-3 min-w-[120px] max-w-[200px] border-r border-black/20 cursor-pointer group select-none transition-colors
                    ${
                      isActive
                        ? "bg-vscode-bg text-white border-t border-t-vscode-blue"
                        : "bg-[#2D2D2D] text-gray-400 hover:bg-[#2D2D2D]/80"
                    }
                 `}
          >
            {tab.icon}
            <span
              className={`flex-1 truncate font-normal ${
                isActive ? "text-white" : "text-gray-400"
              }`}
            >
              {tab.name}
            </span>
            <span className="p-0.5 rounded-md hover:bg-gray-700/50">
              <X
                size={14}
                className={`opacity-0 group-hover:opacity-100 ${
                  isActive ? "opacity-100" : ""
                }`}
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
};
export default TabBar;
