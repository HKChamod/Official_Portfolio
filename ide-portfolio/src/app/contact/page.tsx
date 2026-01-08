"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CodeLayout from "@/components/layout/CodeLayout";
import { useIDE } from "@/context/IDEContext";

const Contact = () => {
  const { addTerminalLine, setTerminalOpen } = useIDE();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTerminalOpen(true);
    addTerminalLine(`> sending packet from ${email}...`);

    // Simulate network delay
    setTimeout(() => {
      addTerminalLine("> status: 200 OK (Message Received)");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <CodeLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl pl-4"
      >
        <div className="text-gray-400 mb-6 italic">
          /* Contact Stylesheet */
        </div>

        <div className="space-y-6 text-sm md:text-base">
          <div className="group">
            <span className="text-vscode-yellow">.contact-me</span>{" "}
            <span className="text-vscode-yellow">{"{"}</span>
            <div className="pl-8 text-vscode-blue">
              display: <span className="text-vscode-orange">flex</span>;
              <br />
              flex-direction: <span className="text-vscode-orange">column</span>
              ;
              <br />
              gap: <span className="text-vscode-orange">2rem</span>;
            </div>
            <span className="text-vscode-yellow">{"}"}</span>
          </div>

          <div className="group">
            <span className="text-vscode-yellow">#email-form</span>{" "}
            <span className="text-vscode-yellow">::after</span>{" "}
            <span className="text-vscode-yellow">{"{"}</span>
            <div className="pl-8 text-vscode-text">
              <span className="text-gray-500">
                /* Send me a message directly */
              </span>
              <br />
              <span className="text-vscode-blue">content:</span>{" "}
              <span className="text-vscode-orange">"Let's Connect"</span>;
            </div>
            <span className="text-vscode-yellow">{"}"}</span>
            <form
              onSubmit={handleSubmit}
              className="mt-4 pl-8 max-w-md flex flex-col gap-4 font-mono"
            >
              <div className="flex flex-col">
                <label className="text-vscode-blue mb-1">
                  .sender-name <span className="text-white">{"{"}</span>
                </label>
                <div className="pl-4 flex items-center">
                  <span className="text-vscode-blue">value:</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=' "Your Name"'
                    className="bg-transparent border-b border-gray-700 p-1 text-vscode-orange focus:border-vscode-blue outline-none flex-1 placeholder-gray-600"
                  />
                  <span className="text-white">;</span>
                </div>
                <span className="text-white">{"}"}</span>
              </div>

              <div className="flex flex-col">
                <label className="text-vscode-blue mb-1">
                  .sender-email <span className="text-white">{"{"}</span>
                </label>
                <div className="pl-4 flex items-center">
                  <span className="text-vscode-blue">value:</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=' "email@example.com"'
                    className="bg-transparent border-b border-gray-700 p-1 text-vscode-orange focus:border-vscode-blue outline-none flex-1 placeholder-gray-600"
                  />
                  <span className="text-white">;</span>
                </div>
                <span className="text-white">{"}"}</span>
              </div>

              <div className="flex flex-col">
                <label className="text-vscode-blue mb-1">
                  .message-content <span className="text-white">{"{"}</span>
                </label>
                <div className="pl-4 flex flex-col">
                  <div className="flex">
                    <span className="text-vscode-blue whitespace-nowrap">
                      text:
                    </span>
                    <span className="text-vscode-orange ml-2">"</span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="bg-[#252526] border border-gray-700 p-2 text-vscode-text focus:border-vscode-blue outline-none rounded-sm font-mono my-1 resize-none"
                  ></textarea>
                  <div className="flex justify-end">
                    <span className="text-vscode-orange">"</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
                <span className="text-white">{"}"}</span>
              </div>

              <button
                type="submit"
                className="bg-vscode-blue text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-colors self-start font-bold mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </CodeLayout>
  );
};

export default Contact;
