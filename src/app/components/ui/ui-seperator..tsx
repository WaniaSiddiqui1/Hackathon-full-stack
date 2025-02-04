import React from "react";
import { cn } from "@/app/lib/utils";

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn("border-b border-border", className)}
      {...props}
    />
  );
}
