"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Projects"
            title="Flagship builds with measurable impact."
            description="A selection of systems engineered to solve real-world problems with polish and scalability."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-6 lg:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className={cn(project.featured && "lg:col-span-2")}
              >
                <GlassCard
                  className={cn(
                    "overflow-hidden p-0",
                    project.featured && "border-cyan-300/40",
                  )}
                >
                  <div
                    className={cn(
                      "grid gap-6",
                      project.featured
                        ? "lg:grid-cols-[1fr_1.2fr]"
                        : "sm:grid-cols-[1fr_1.4fr]",
                    )}
                  >
                    <div className="relative min-h-[220px]">
                      <Image
                        src="/project-placeholder.svg"
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                            {project.featured ? "Flagship" : "Project"}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">
                            {project.name}
                          </h3>
                          <p className="text-sm text-slate-300">
                            {project.tagline}
                          </p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>

                      <div className="space-y-3 text-sm text-slate-300">
                        <p>
                          <span className="font-semibold text-white">Problem:</span>{" "}
                          {project.problem}
                        </p>
                        <p>
                          <span className="font-semibold text-white">Solution:</span>{" "}
                          {project.solution}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-white">Key Features</p>
                        <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">Tech Stack</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-cyan-100/90">
                        <span className="font-semibold text-white">Impact:</span>{" "}
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
