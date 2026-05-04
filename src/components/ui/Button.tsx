"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-400 text-slate-950 shadow-[0_15px_40px_-20px_rgba(56,189,248,0.9)] hover:bg-cyan-300",
  secondary:
    "bg-white/10 text-white border border-white/10 hover:border-cyan-300/40 hover:bg-white/15",
  ghost:
    "text-white/80 hover:text-white border border-white/10 hover:border-white/40",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
