import React from "react";

const CodeLayout = ({
  children,
  fileName,
}: {
  children: React.ReactNode;
  fileName?: string;
}) => {
  // Generate an array of line numbers. This is a simple approximation.
  // For a real IDE, this would need to track line breaks, which is complex in web.
  // We'll create a safe number like 50 lines to cover most content.
  const lines = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="flex min-h-full">
      <div className="w-12 flex-shrink-0 flex flex-col items-end pr-4 text-[#858585] select-none pt-8 text-sm md:text-base leading-relaxed">
        {lines.map((line) => (
          <div key={line} className="h-6 md:h-[1.6rem]">
            {line}
          </div>
        ))}
      </div>
      <div className="flex-1 pt-8 pb-20">{children}</div>
    </div>
  );
};

export default CodeLayout;
