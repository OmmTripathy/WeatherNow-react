import { motion } from "framer-motion";

export default function ScrollAnimation({ 
  children, 
  variant = "blur-up",
  delay = 0,
  duration = 0.7 
}) {
  
  const variants = {
    // Blur from bottom to top
    "blur-up": {
      initial: { opacity: 0, filter: "blur(10px)", y: 80 },
      animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
    
    // Fade and slide from left
    "slide-left": {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    },
    
    // Fade and slide from right
    "slide-right": {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    },
    
    // Scale up with blur
    "scale-blur": {
      initial: { opacity: 0, filter: "blur(10px)", scale: 0.8 },
      animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
    },
    
    // Fade up (no blur)
    "fade-up": {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    
    // Rotate and fade
    "rotate-fade": {
      initial: { opacity: 0, rotate: -10, filter: "blur(5px)" },
      animate: { opacity: 1, rotate: 0, filter: "blur(0px)" },
    },
    
    // Bounce effect
    "bounce-in": {
      initial: { opacity: 0, scale: 0.3, filter: "blur(8px)" },
      animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    },
  };

  const selectedVariant = variants[variant] || variants["blur-up"];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}