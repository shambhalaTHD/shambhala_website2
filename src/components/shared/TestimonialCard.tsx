import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  index?: number;
}

const TestimonialCard = ({
  name,
  location,
  rating,
  text,
  index = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-accent/30 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-highlight fill-highlight" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground leading-relaxed mb-6">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <span className="font-display font-semibold text-secondary-foreground">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
