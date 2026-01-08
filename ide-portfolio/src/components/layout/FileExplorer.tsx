import Link from "next/link";
import { ChevronDown, FileJson, FileCode, FileType } from "lucide-react";

const FileExplorer = () => {
  return (
    <div className="w-60 bg-vscode-sidebar text-vscode-text border-r border-black/20 flex flex-col h-full hidden md:flex">
      <div className="px-4 py-3 text-xs font-bold tracking-wider uppercase flex items-center justify-between text-gray-400">
        <span>Explorer</span>
        <span className="cursor-pointer hover:text-white">...</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-0">
          <div className="flex items-center gap-1 text-xs font-bold cursor-pointer py-1 px-1 hover:bg-[#37373d] text-gray-300">
            <ChevronDown size={14} />
            <span className="uppercase font-bold">PORTFOLIO</span>
          </div>
          <div className="flex flex-col">
            <ExplorerItem
              name="home.tsx"
              icon={<FileCode size={16} className="text-vscode-blue" />}
              href="/"
            />
            <ExplorerItem
              name="about.json"
              icon={<FileJson size={16} className="text-vscode-yellow" />}
              href="/about"
            />
            <ExplorerItem
              name="projects.js"
              icon={<FileCode size={16} className="text-vscode-yellow" />}
              href="/projects"
            />
            <ExplorerItem
              name="contact.css"
              icon={<FileType size={16} className="text-vscode-blue" />}
              href="/contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExplorerItem = ({
  name,
  icon,
  href,
}: {
  name: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-1 hover:bg-[#2a2d2e] cursor-pointer text-sm text-gray-300 hover:text-white transition-colors border-l-2 border-transparent hover:border-vscode-text focus:bg-[#37373d] focus:border-vscode-blue outline-none"
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default FileExplorer;
