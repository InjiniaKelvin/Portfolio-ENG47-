"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur-xl">
          <Link
            href="#home"
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-base font-semibold text-cyan-300">
              KM
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <Container>
              <div
                className={cn(
                  "mt-4 space-y-4 rounded-3xl border border-white/10 bg-slate-950/90 p-6 text-sm text-slate-200 shadow-2xl",
                )}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition-colors hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  href="#contact"
                  variant="secondary"
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
