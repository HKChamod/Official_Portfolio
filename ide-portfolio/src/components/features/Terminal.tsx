"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIDE } from "@/context/IDEContext";

const Terminal = () => {
  const {
    isTerminalOpen,
    toggleTerminal,
    terminalHistory,
    addTerminalLine,
    clearTerminal,
  } = useIDE();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, isTerminalOpen]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();

    // Add user command to history
    addTerminalLine(`user@portfolio:~$ ${cmd}`);

    switch (cleanCmd) {
      case "help":
        addTerminalLine("Available commands:");
        addTerminalLine("  help        - List commands");
        addTerminalLine("  clear       - Clear terminal");
        addTerminalLine("  ls          - List files");
        addTerminalLine(
          '  open <file> - Navigate to file (e.g., "open about")'
        );
        break;
      case "clear":
        clearTerminal();
        // We don't want to add the command back after clear, but our log logic above does.
        // For simplicity, we'll just clear.
        break;
      case "ls":
        addTerminalLine("home.tsx  about.json  projects.js  contact.css");
        break;
      default:
        if (cleanCmd.startsWith("open ")) {
          const page = cleanCmd.split(" ")[1];
          const routes: Record<string, string> = {
            home: "/",
            "home.tsx": "/",
            about: "/about",
            "about.json": "/about",
            projects: "/projects",
            "projects.js": "/projects",
            contact: "/contact",
            "contact.css": "/contact",
          };

          if (routes[page]) {
            addTerminalLine(`Opening ${page}...`);
            router.push(routes[page]);
          } else {
            addTerminalLine(`File not found: ${page}`);
          }
        } else if (cleanCmd !== "") {
          addTerminalLine(`Command not found: ${cmd}`);
        }
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  if (!isTerminalOpen)
    return (
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-[#181818] border-t border-[#2B2B2B] z-50 flex items-center justify-between px-4 transition-all duration-300">
        <div className="flex items-center gap-4 text-xs select-none">
          <button
            onClick={toggleTerminal}
            className="uppercase text-gray-400 hover:text-white font-bold transition-colors"
          >
            Terminal
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <button onClick={toggleTerminal} className="hover:text-white">
            <ChevronUp size={14} />
          </button>
        </div>
      </div>
    );

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#2B2B2B] z-50 transition-all duration-300 h-48`}
    >
      <div className="flex items-center justify-between px-4 h-8 bg-[#181818] border-b border-[#2B2B2B]">
        <div className="flex items-center gap-4 text-xs select-none">
          <span className="uppercase text-white font-bold border-b border-white py-1 cursor-pointer">
            Terminal
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">
            Output
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">
            Problems
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">
            Debug Console
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <button onClick={toggleTerminal} className="hover:text-white">
            <ChevronDown size={14} />
          </button>
          <button onClick={toggleTerminal} className="hover:text-white">
            <X size={14} />
          </button>
        </div>
      </div>

      <div
        className="p-2 h-[calc(100%-32px)] overflow-y-auto font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {terminalHistory.map((line, i) => (
          <div
            key={i}
            className="text-vscode-text leading-tight whitespace-pre-wrap animate-fade-in"
          >
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-vscode-text">user@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-vscode-text"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
