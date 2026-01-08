"use client";
import { motion } from "framer-motion";
import CodeLayout from "@/components/layout/CodeLayout";

const About = () => {
  // Helper to render value, making URLs clickable
  const renderValue = (val: string) => {
    if (val.startsWith("http")) {
      return (
        <a
          href={val}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CE9178] hover:underline cursor-pointer"
        >
          "{val}"
        </a>
      );
    }
    return <span className="text-[#CE9178]">"{val}"</span>;
  };

  return (
    <CodeLayout>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="pl-4 pb-12"
      >
        <div className="font-mono text-sm md:text-base leading-relaxed inline-block min-w-full">
          <span className="text-gray-500 block mb-4">// about.json</span>
          <span className="text-gray-500 block mb-4">
            // A summary of the developer instance
          </span>

          <span className="text-[#FFD700]">{"{"}</span>
          <div className="pl-4">
            <span className="text-[#9CDCFE]">"developer"</span>:{" "}
            <span className="text-[#FFD700]">{"{"}</span>
            <div className="pl-4">
              <div>
                <span className="text-[#9CDCFE]">"name"</span>:{" "}
                <span className="text-[#CE9178]">"Hiran Chamod"</span>,
              </div>
              <div>
                <span className="text-[#9CDCFE]">"role"</span>:{" "}
                <span className="text-[#CE9178]">
                  "Software Engineering Undergraduate"
                </span>
                ,
              </div>
              <div>
                <span className="text-[#9CDCFE]">"university"</span>:{" "}
                <span className="text-[#CE9178]">"NSBM Green University"</span>,
              </div>
              <div>
                <span className="text-[#9CDCFE]">"status"</span>:{" "}
                <span className="text-[#CE9178]">"Open to Collaborations"</span>
                ,
              </div>
              <div>
                <span className="text-[#9CDCFE]">"location"</span>:{" "}
                <span className="text-[#CE9178]">"Sri Lanka"</span>
              </div>
            </div>
            <span className="text-[#FFD700]">{"}"}</span>,
            <div className="mt-4">
              <span className="text-[#9CDCFE]">"contact"</span>:{" "}
              <span className="text-[#FFD700]">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-[#9CDCFE]">"email"</span>:{" "}
                  <span className="text-[#CE9178]">"hkchamod87@gmail.com"</span>
                  ,
                </div>
                <div>
                  <span className="text-[#9CDCFE]">"github"</span>:{" "}
                  {renderValue("https://github.com/HKChamod")},
                </div>
                <div>
                  <span className="text-[#9CDCFE]">"linkedin"</span>:{" "}
                  {renderValue("https://www.linkedin.com/in/hk-chamod/")}
                </div>
              </div>
              <span className="text-[#FFD700]">{"}"}</span>,
            </div>
            <div className="mt-4">
              <span className="text-[#9CDCFE]">"stack"</span>:{" "}
              <span className="text-[#FFD700]">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-[#9CDCFE]">"languages"</span>:{" "}
                  <span className="text-[#FFD700]">[</span>
                  <span className="text-[#CE9178]">"JavaScript"</span>,{" "}
                  <span className="text-[#CE9178]">"TypeScript"</span>,{" "}
                  <span className="text-[#CE9178]">"Python"</span>,{" "}
                  <span className="text-[#CE9178]">"Java"</span>,{" "}
                  <span className="text-[#CE9178]">"SQL"</span>
                  <span className="text-[#FFD700]">]</span>,
                </div>
                <div>
                  <span className="text-[#9CDCFE]">"frontend"</span>:{" "}
                  <span className="text-[#FFD700]">[</span>
                  <span className="text-[#CE9178]">"Next.js 15"</span>,{" "}
                  <span className="text-[#CE9178]">"React Native"</span>,{" "}
                  <span className="text-[#CE9178]">"Tailwind CSS"</span>
                  <span className="text-[#FFD700]">]</span>,
                </div>
                <div>
                  <span className="text-[#9CDCFE]">"creative"</span>:{" "}
                  <span className="text-[#FFD700]">[</span>
                  <span className="text-[#CE9178]">
                    "Adobe Premiere Pro"
                  </span>, <span className="text-[#CE9178]">"Figma"</span>
                  <span className="text-[#FFD700]">]</span>
                </div>
              </div>
              <span className="text-[#FFD700]">{"}"}</span>,
            </div>
            <div className="mt-4">
              <span className="text-[#9CDCFE]">"leadership"</span>:{" "}
              <span className="text-[#FFD700]">[</span>
              <div className="pl-4">
                <span className="text-[#FFD700]">{"{"}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-[#9CDCFE]">"org"</span>:{" "}
                    <span className="text-[#CE9178]">
                      "CSSL NSBM GenZ Chapter"
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-[#9CDCFE]">"role"</span>:{" "}
                    <span className="text-[#CE9178]">
                      "Executive Committee Member"
                    </span>
                  </div>
                </div>
                <span className="text-[#FFD700]">{"}"}</span>,
                <div>
                  <span className="text-[#FFD700]">{"{"}</span>
                  <div className="pl-4">
                    <div>
                      <span className="text-[#9CDCFE]">"org"</span>:{" "}
                      <span className="text-[#CE9178]">
                        "NSBM Archery Club"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-[#9CDCFE]">"role"</span>:{" "}
                      <span className="text-[#CE9178]">"Treasurer"</span>
                    </div>
                  </div>
                  <span className="text-[#FFD700]">{"}"}</span>
                </div>
              </div>
              <span className="text-[#FFD700]">]</span>,
            </div>
            <div className="mt-4">
              <span className="text-[#9CDCFE]">"interests"</span>:{" "}
              <span className="text-[#FFD700]">[</span>
              <div className="pl-4">
                <span className="text-[#CE9178]">"Agentic AI"</span>,
                <br />
                <span className="text-[#CE9178]">
                  "Hardware Hacking (ESP32/Flipper Zero)"
                </span>
                ,
                <br />
                <span className="text-[#CE9178]">"Listen to Music"</span>
              </div>
              <span className="text-[#FFD700]">]</span>
            </div>
          </div>
          <span className="text-[#FFD700]">{"}"}</span>
        </div>
      </motion.div>
    </CodeLayout>
  );
};

export default About;
