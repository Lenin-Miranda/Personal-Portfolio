import { cn } from "../lib/utils";
import React from "react";

export default function GridBackgroundDemo({ children }) {
  return (
    <div className="relative w-full bg-black">
      <div
        className={cn(
          "absolute inset-0 shadow-lg",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="relative z-10 py-8">{children}</div>
    </div>
  );
}
