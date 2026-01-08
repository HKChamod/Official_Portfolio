"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = 'const developer = "Hiran Chamod";';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 h-full bg-vscode-bg text-vscode-text flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-500 text-sm">run index.tsx</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[60px] md:min-h-[80px]">
            <span className="text-vscode-blue">const</span>{" "}
            <span className="text-vscode-yellow">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-vscode-orange">
              {text.split('"')[1]
                ? `"${text.split('"')[1]}"`
                : text.includes('"')
                ? `"${text.split('"')[0]}`
                : ""}
            </span>
            <span className="text-white">;</span>
          </h1>

          <div className="text-3xl md:text-5xl font-bold mb-8 font-mono">
            <span className="text-vscode-blue">const</span>{" "}
            <span className="text-vscode-yellow">Portfolio</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-vscode-orange">"Welcome!"</span>
            <span className="text-white">;</span>
          </div>

          <div className="space-y-4 text-lg md:text-xl text-gray-400">
            <p>
              <span className="text-vscode-blue">import</span>{" "}
              <span className="text-vscode-yellow">{`{ FullStack }`}</span>{" "}
              <span className="text-vscode-blue">from</span>{" "}
              <span className="text-vscode-orange">'@developer/skills'</span>;
            </p>
            <p className="pl-4 border-l-2 border-gray-700">
              Building digital experiences with clean code and modern design.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link
              href="/projects"
              className="bg-vscode-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors font-bold"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border border-vscode-text text-vscode-text px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Hiran Chamod"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 bg-[#252526] p-2 rounded-lg border border-slate-700 text-xs font-mono text-vscode-blue shadow-lg">
            <span className="text-vscode-yellow">Status:</span> "Coding..."
          </div>
        </div>
      </motion.div>
    </div>
  );
}
