import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import FileExplorer from "@/components/layout/FileExplorer";
import TabBar from "@/components/layout/TabBar";
import StatusBar from "@/components/layout/StatusBar";
import MobileHeader from "@/components/layout/MobileHeader";
import Terminal from "@/components/features/Terminal";
import { IDEProvider } from "@/context/IDEContext";
import CommandPalette from "@/components/features/CommandPalette";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HKChamod | Software Engineering Student",
  description:
    "Portfolio of HKChamod, a Full Stack Developer and Software Engineering student at NSBM. View my projects and code.",
  keywords: [
    "Software Engineer",
    "React",
    "Next.js",
    "NSBM",
    "Web Developer",
    "Sri Lanka",
  ],
  openGraph: {
    title: "HKChamod | Software Engineering Student",
    description:
      "Portfolio of HKChamod, a Full Stack Developer. View my projects and code.",
    siteName: "HKChamod Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased font-mono bg-vscode-bg text-vscode-text h-screen flex flex-col overflow-hidden`}
      >
        <IDEProvider>
          <CommandPalette />
          <MobileHeader />
          <div className="flex flex-1 overflow-hidden relative">
            <Sidebar />
            <FileExplorer />
            <div className="flex flex-col flex-1 bg-vscode-bg min-w-0">
              <TabBar />
              <main className="flex-1 overflow-y-auto p-0 pb-48">
                {" "}
                {/* Added padding for terminal space */}
                {children}
              </main>
            </div>
            <Terminal />
          </div>
          <StatusBar />
        </IDEProvider>
      </body>
    </html>
  );
}
