"use client";

import { motion } from "framer-motion";

import { experiences } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Experience"
            title="Delivering real-world systems in fast-moving teams."
            description="Hands-on experience across enterprise support and product engineering environments."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-6"
          >
            {experiences.map((experience) => (
              <motion.div key={experience.company} variants={fadeUp}>
                <GlassCard className="p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                        {experience.company}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>
                    </div>
                    <div className="text-sm text-slate-300">
                      <p>{experience.timeframe}</p>
                      <p>{experience.location}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-base text-slate-300">
                    {experience.summary}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
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
