import { motion } from "framer-motion";
import { Mountain, Clock, Users, MapPin, Check, AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import trekkingImage from "@/assets/trekking.jpg";
import heroImage from "@/assets/hero-mountains.jpg";

const treks = [
  {
    name: "Kheerganga Trek",
    description: "A magical trail to natural hot springs through ancient forests.",
    duration: "2 Days",
    difficulty: "Moderate",
    distance: "12 km one way",
    altitude: "2,960m",
    highlights: ["Natural hot springs", "Parvati River views", "Forest camping"],
    price: "₹3,000",
  },
  {
    name: "Tosh Glacier Trek",
    description: "An adventurous climb to the glacier above Tosh village.",
    duration: "1 Day",
    difficulty: "Challenging",
    distance: "8 km round trip",
    altitude: "3,500m",
    highlights: ["Glacier views", "Alpine meadows", "Sunrise trek option"],
    price: "₹2,500",
  },
  {
    name: "Malana Village / Magic Valley Trek",
    description: "Visit the ancient village with unique culture and customs.",
    duration: "1 Day",
    difficulty: "Easy-Moderate",
    distance: "6 km round trip",
    altitude: "2,652m",
    highlights: ["Ancient culture", "Scenic valley", "Local interaction"],
    price: "₹2,000",
  },
  {
    name: "Manthalay Trek",
    description: "An epic multi-day adventure through pristine Himalayan landscapes.",
    duration: "6 Days 5 Nights",
    difficulty: "Challenging",
    distance: "Multi-day expedition",
    altitude: "4,200m",
    highlights: ["Remote villages", "High altitude passes", "Camping under stars"],
    price: "₹35,000",
  },
  {
    name: "Custom Trek",
    description: "Design your own trekking adventure! Get in touch via WhatsApp to plan a personalized trek tailored to your preferences and experience level.",
    duration: "Flexible",
    difficulty: "Custom",
    distance: "Your choice",
    altitude: "Varies",
    highlights: ["Personalized route", "Flexible schedule", "Custom experience"],
    price: "Contact us",
    isCustom: true,
  },
];

const included = [
  "Experienced local guide",
  "All permits and fees",
  "Packed lunch and snacks",
  "First aid kit",
  "Safety equipment",
  "Photography assistance",
];

const TrekkingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={trekkingImage}
          alt="Trekkers in Himalayas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary-foreground/80 mb-4">
              Adventure Awaits
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Trekking Adventures
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore hidden trails and ancient paths with expert local guides
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Walk Where Few Have Walked
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Parvati Valley is a trekker's paradise. From gentle village walks to challenging 
                glacier treks, our expert local guides will take you on journeys through some of the 
                most breathtaking landscapes in the Himalayas. Every trail tells a story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treks */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Our Treks"
            title="Choose Your Adventure"
            description="From beginner-friendly walks to challenging expeditions"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treks.map((trek, index) => (
              <motion.div
                key={trek.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl font-semibold">{trek.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      trek.difficulty === "Challenging" 
                        ? "bg-destructive/10 text-destructive"
                        : trek.difficulty === "Moderate"
                        ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                        : trek.difficulty === "Custom"
                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {trek.difficulty}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">{trek.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{trek.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{trek.altitude}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{trek.distance}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {trek.highlights.map((highlight) => (
                        <span key={highlight} className="px-3 py-1 bg-secondary rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-bold text-primary">{trek.price}</span>
                      {!trek.isCustom && <span className="text-muted-foreground text-sm"> /person</span>}
                    </div>
                    <WhatsAppButton
                      message={`Hi! I'm interested in the ${trek.name} from Shambhala THD.`}
                    >
                      {trek.isCustom ? "Get in Touch" : "Book Trek"}
                    </WhatsAppButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                What's Included
              </h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/50 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-highlight flex-shrink-0" />
                <h3 className="font-display text-xl font-semibold">Important Notes</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Wear comfortable trekking shoes</li>
                <li>• Carry at least 2 liters of water</li>
                <li>• Weather can change quickly – carry rain gear</li>
                <li>• Inform us of any medical conditions</li>
                <li>• Custom treks available on request</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Ready for Adventure?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Our experienced guides are ready to show you the hidden treasures of Parvati Valley.
            </p>
            <WhatsAppButton
              variant="hero"
              size="xl"
              message="Hi! I want to book a trek from Shambhala THD. Please share details."
            >
              Plan Your Trek
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TrekkingPage;
