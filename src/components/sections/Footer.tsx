"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { socialLinks, siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-400 md:flex-row">
          <div className="space-y-2">
            <p className="text-white">
              {siteConfig.name} · {siteConfig.role}
            </p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:text-white"
          >
            Back to top <ArrowUp size={16} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
