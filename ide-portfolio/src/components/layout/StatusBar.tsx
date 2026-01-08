import { GitBranch, Check, Bell } from "lucide-react";

const StatusBar = () => {
  return (
    <footer className="h-6 bg-vscode-status text-white flex items-center justify-between px-2 text-xs select-none z-20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:flex">
          <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[8px]">
            0
          </div>
          <span>0 errors</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:flex">
          <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[8px]">
            0
          </div>
          <span>0 warnings</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:flex">
          <Check size={12} />
          <span>Prettier</span>
        </div>
        <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:flex">
          <span>Ln 1, Col 1</span>
        </div>
        <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:flex">
          <span>UTF-8</span>
        </div>
        <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors">
          <Bell size={12} />
        </div>
      </div>
    </footer>
  );
};
export default StatusBar;
