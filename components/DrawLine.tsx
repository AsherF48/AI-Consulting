"use client";

import { motion } from "framer-motion";

export default function DrawLine() {
  return (
    <div className="border-t border-line">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-px bg-ink"
      />
    </div>
  );
}
