import { motion } from "framer-motion";
import { TiltCard, HoverGlow } from "../animations/InteractiveElements";
import { cn } from "../../lib/utils";

export const ModernCard = ({ 
  children, 
  className = "", 
  variant = "default",
  interactive = true,
  glow = false 
}) => {
  const baseClasses = "rounded-2xl border backdrop-blur-sm transition-all duration-300";
  
  const variants = {
    default: "bg-white/10 dark:bg-gray-900/50 border-gray-200/20 dark:border-gray-700/30",
    glass: "bg-white/5 dark:bg-gray-900/20 border-white/10 dark:border-gray-700/20",
    solid: "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
    gradient: "bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200/30 dark:border-blue-700/30"
  };

  const CardWrapper = interactive ? TiltCard : motion.div;
  const GlowWrapper = glow ? HoverGlow : motion.div;

  return (
    <GlowWrapper>
      <CardWrapper
        className={cn(baseClasses, variants[variant], className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </CardWrapper>
    </GlowWrapper>
  );
};

export const GlassCard = ({ children, className = "" }) => {
  return (
    <ModernCard 
      variant="glass" 
      className={cn("shadow-xl", className)}
      interactive={true}
      glow={true}
    >
      {children}
    </ModernCard>
  );
};