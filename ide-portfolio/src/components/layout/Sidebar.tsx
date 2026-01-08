import {
  Files,
  Search,
  GitGraph,
  Blocks,
  Settings,
  User,
  Github,
  Linkedin,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-12 bg-vscode-sidebar flex flex-col items-center py-2 h-full justify-between z-10 hidden md:flex">
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="p-3 cursor-pointer border-l-2 border-vscode-text text-vscode-text w-full flex justify-center">
          <Files size={24} />
        </div>
        <div className="p-3 cursor-pointer border-l-2 border-transparent text-gray-500 hover:text-vscode-text hover:border-vscode-text w-full flex justify-center transition-all">
          <Search size={24} />
        </div>
        <div className="p-3 cursor-pointer border-l-2 border-transparent text-gray-500 hover:text-vscode-text hover:border-vscode-text w-full flex justify-center transition-all">
          <GitGraph size={24} />
        </div>
        <div className="p-3 cursor-pointer border-l-2 border-transparent text-gray-500 hover:text-vscode-text hover:border-vscode-text w-full flex justify-center transition-all">
          <Blocks size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-2 w-full items-center">
        <a
          href="https://github.com/HKChamod"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="p-3 cursor-pointer text-gray-500 hover:text-vscode-text w-full flex justify-center transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/hk-chamod/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="p-3 cursor-pointer text-gray-500 hover:text-vscode-text w-full flex justify-center transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <div className="p-3 cursor-pointer text-gray-500 hover:text-vscode-text w-full flex justify-center">
          <User size={24} />
        </div>
        <div className="p-3 cursor-pointer text-gray-500 hover:text-vscode-text w-full flex justify-center">
          <Settings size={24} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
