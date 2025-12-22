import { motion } from "framer-motion";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  tagline,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${alignClass} ${className}`}
    >
      {tagline && (
        <span className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-3">
          {tagline}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
