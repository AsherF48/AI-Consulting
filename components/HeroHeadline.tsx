"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function HeroHeadline({ text }: { text: string }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="font-serif text-4xl leading-[1.1] text-ink md:text-6xl"
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
