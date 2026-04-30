"use client";

import { motion } from "framer-motion";

import { aboutHighlights, aboutParagraphs } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-spacing">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="About"
              title="Engineering systems that scale, adapt, and feel premium."
              description="Focused on building resilient software architectures with a product-first mindset."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-6 text-base leading-7 text-slate-300"
            >
              {aboutParagraphs.map((paragraph) => (
                <motion.p key={paragraph} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-6"
          >
            {aboutHighlights.map((highlight) => (
              <motion.div key={highlight.title} variants={fadeUp}>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {highlight.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
