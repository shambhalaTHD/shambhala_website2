import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index?: number;
}

const ExperienceCard = ({
  title,
  description,
  image,
  link,
  index = 0,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ExperienceCard;
