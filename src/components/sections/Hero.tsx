"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";

import { heroBadges, siteConfig } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/ui/GithubIcon";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 subtle-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950 to-slate-950" />
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/30 blur-[120px] animate-gradient" />
        <div className="absolute right-0 top-32 h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[120px] animate-gradient" />
      </div>

      <Container className="section-spacing">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-8">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                >
                  <badge.icon size={14} className="text-cyan-300" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
                {siteConfig.role}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="gradient-text">{siteConfig.headline}</span>
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                {siteConfig.subheadline}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                View Projects <ArrowUpRight size={16} />
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me <Mail size={16} />
              </Button>
              <Button href={siteConfig.github} variant="ghost" target="_blank">
                GitHub <GithubIcon size={16} />
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-cyan-400/30 via-slate-950/50 to-violet-500/40 blur-2xl" />
            <div className="glass-panel relative rounded-[32px] p-6">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/profile-placeholder.svg"
                  alt="Kelvin Mwania profile"
                  width={380}
                  height={420}
                  className="h-[420px] w-full object-cover animate-float"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold text-white">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-slate-300">{siteConfig.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="flex justify-center pb-12">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-xs uppercase tracking-[0.3em] text-slate-400"
        >
          Scroll
          <ChevronDown className="mt-3 h-5 w-5 animate-scroll" />
        </motion.div>
      </div>
    </section>
  );
}
