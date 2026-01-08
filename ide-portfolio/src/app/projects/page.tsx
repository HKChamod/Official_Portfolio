"use client";
import { motion } from "framer-motion";
import CodeLayout from "@/components/layout/CodeLayout";

const projects = [
  {
    id: 1,
    name: "Portfolio_v1",
    description:
      "This website! A developer portfolio designed to mimic the VS Code IDE experience.",
    tags: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    link: "https://github.com/HKChamod",
  },
  {
    id: 2,
    name: "SinhalaUnicodeConverter",
    description:
      "A utility tool to convert text between Sinhala Unicode and standard fonts seamlessly.",
    tags: ["Utility", "Text Processing", "Tools"],
    status: "Completed",
    link: "https://github.com/HKChamod/SinhalaUnicodeConverter",
  },
  {
    id: 3,
    name: "Solar_Monitoring_Helper",
    description:
      "A monitoring solution to track solar energy generation and system status.",
    tags: ["IoT", "Energy", "Analytics"],
    status: "Prototype",
    link: "https://github.com/HKChamod/Solar_Monitoring_Helper",
  },
  {
    id: 4,
    name: "Telegram-seat-bot",
    description:
      "An automated Telegram bot designed to assist with seat booking or availability checking.",
    tags: ["Automation", "Telegram API", "Bot"],
    status: "Active",
    link: "https://github.com/HKChamod/Telegram-seat-bot",
  },
  {
    id: 5,
    name: "new-year-wishes-tree",
    description:
      "An interactive web application allowing users to share and view New Year wishes on a virtual tree.",
    tags: ["Interactive", "Frontend", "Event"],
    status: "Completed",
    link: "https://github.com/HKChamod/new-year-wishes-tree",
  },
  {
    id: 6,
    name: "Project-Elite-Essences",
    description:
      "A web platform showcasing elite products or branding essences.",
    tags: ["Web Design", "Branding", "UI/UX"],
    status: "Archived",
    link: "https://github.com/HKChamod/Project-Elite-Essences",
  },
  {
    id: 7,
    name: "MobileShop-Dashboard",
    description:
      "A comprehensive dashboard for managing mobile shop inventory, sales, and customer data.",
    tags: ["Dashboard", "Management", "Full Stack"],
    status: "Completed",
    link: "https://github.com/HKChamod/MobileShop-Dashboard",
  },
];

const Projects = () => {
  return (
    <CodeLayout>
      <div className="pl-4 font-mono text-sm md:text-base leading-relaxed">
        <div className="text-gray-400 mb-4 comment">// My recent projects</div>
        <div>
          <span className="text-vscode-blue">const</span>{" "}
          <span className="text-vscode-yellow">projects</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-vscode-yellow">[</span>
        </div>

        <div className="pl-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => window.open(project.link, "_blank")}
              className="group hover:bg-[#2c2c2d] rounded-sm cursor-pointer transition-colors relative"
            >
              <span className="text-vscode-yellow">{"{"}</span>
              <div className="pl-4 group-hover:bg-[#343436] p-1 rounded-sm -ml-4 border-l-2 border-transparent group-hover:border-vscode-blue">
                <div>
                  <span className="text-vscode-blue">id</span>:{" "}
                  <span className="text-vscode-green">{project.id}</span>,
                </div>
                <div>
                  <span className="text-vscode-blue">name</span>:{" "}
                  <span className="text-vscode-orange">"{project.name}"</span>,
                </div>
                <div>
                  <span className="text-vscode-blue">description</span>:{" "}
                  <span className="text-vscode-orange">
                    "{project.description}"
                  </span>
                  ,
                </div>
                <div className="flex flex-wrap">
                  <span className="text-vscode-blue">tags</span>:{" "}
                  <span className="text-vscode-yellow">[</span>
                  {project.tags.map((tag, i) => (
                    <span key={i}>
                      <span className="text-vscode-orange">"{tag}"</span>
                      {i < project.tags.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  <span className="text-vscode-yellow">]</span>,
                </div>
                <div>
                  <span className="text-vscode-blue">status</span>:{" "}
                  <span className="text-vscode-orange">"{project.status}"</span>
                  ,
                </div>
                <div>
                  <span className="text-vscode-blue">link</span>:{" "}
                  <span className="text-[#CE9178] hover:underline">
                    "{project.link}"
                  </span>
                </div>
              </div>
              <span className="text-vscode-yellow">{"}"}</span>
              {index < projects.length - 1 && (
                <span className="text-white">,</span>
              )}
            </motion.div>
          ))}
        </div>

        <div>
          <span className="text-vscode-yellow">];</span>
        </div>
      </div>
    </CodeLayout>
  );
};

export default Projects;
