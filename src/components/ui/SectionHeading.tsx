"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn("space-y-4", align === "center" && "text-center")}
    >
      <motion.div variants={fadeUp}>
        <Badge>{eyebrow}</Badge>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-base leading-7 text-slate-300 sm:text-lg"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
