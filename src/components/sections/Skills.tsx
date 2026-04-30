"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Skills"
            title="A modern engineering toolkit across platforms."
            description="From front-end precision to scalable backend architecture, I build systems with long-term resilience."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((category) => (
              <motion.div key={category.title} variants={fadeUp}>
                <GlassCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <category.icon size={20} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {skill}
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
