"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { contactItems, socialLinks } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build the next premium system together."
            description="Share your project vision and let’s craft a high-impact solution."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-6"
            >
              {contactItems.map((item) => (
                <motion.a
                  key={item.title}
                  variants={fadeUp}
                  href={item.href}
                  className="block"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <GlassCard className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <item.icon size={20} />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                          {item.title}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          {item.value}
                        </p>
                        <p className="mt-2 text-sm text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.a>
              ))}

              <GlassCard className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:text-white"
                    >
                      <link.icon size={16} className="text-cyan-300" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <GlassCard className="p-8">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-200"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-200"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-200"
                  >
                    Project Focus
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Product, platform, or system build"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the system you want to build."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Send Message <ArrowUpRight size={16} />
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
