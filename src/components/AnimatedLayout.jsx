import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

export default function AnimatedLayout({ children, ...props }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
