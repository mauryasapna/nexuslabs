"use client";

import React from "react";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      position="top-right"
      richColors
      className="toaster group font-sans"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#0a0f24]/95 group-[.toaster]:text-white group-[.toaster]:border group-[.toaster]:border-cyan-500/30 group-[.toaster]:shadow-[0_10px_35px_rgba(0,0,0,0.8)] group-[.toaster]:rounded-2xl backdrop-blur-2xl p-4",
          description: "group-[.toast]:text-gray-300 text-xs mt-1",
          actionButton:
            "group-[.toast]:bg-cyan-500 group-[.toast]:text-black font-bold rounded-xl",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white rounded-xl",
        },
      }}
      {...props}
    />
  );
}

export { toast };
