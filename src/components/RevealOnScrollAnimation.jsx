import { motion } from "framer-motion";
import { useRef } from "react";

export default function RevealOnScrollAnimation({ className, children }) {
  const scrollRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate="visible"
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      viewport={{ root: scrollRef, once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
