import { motion } from "framer-motion";
import { Tent, Wifi, Coffee, Mountain, Star, Users, Camera, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Button } from "@/components/ui/button";

import tentImage from "@/assets/tent-stay.jpg";
import heroImage from "@/assets/hero-mountains.jpg";
import bonfireImage from "@/assets/bonfire.jpg";

const tentTypes = [
  {
    name: "Mountain View Tent",
    description: "Our signature tent with panoramic Himalayan views, perfect for couples.",
    price: "₹2,500",
    priceNote: "per night",
    capacity: "2 guests",
    features: ["Queen bed", "Heater", "Private deck", "Mountain view", "Bonfire access"],
    image: tentImage,
    popular: true,
  },
];

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Coffee, label: "Breakfast Included" },
  { icon: Mountain, label: "Mountain Views" },
  { icon: Camera, label: "Photo Spots" },
];

const TentStayPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={tentImage}
          alt="Glamping tent in mountains"
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
              Glamping Experience
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Tent Stay
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Luxury camping under the stars with all the comforts you need
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
                Wake Up to Mountain Magic
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our glamping tents offer the perfect blend of adventure and comfort. Fall asleep to 
                the sound of mountain winds, wake up to golden sunrises over snow-capped peaks, and 
                spend your evenings under a canopy of stars.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {amenities.map((amenity) => (
                  <div key={amenity.label} className="flex items-center gap-2">
                    <amenity.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tent Types */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Choose Your Stay"
            title="Our Tents"
            description="Select the perfect tent for your mountain experience"
            className="mb-12"
          />

          <div className="max-w-md mx-auto">
            {tentTypes.map((tent, index) => (
              <motion.div
                key={tent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow ${
                  tent.popular ? "ring-2 ring-highlight" : ""
                }`}
              >
                {tent.popular && (
                  <div className="bg-highlight text-highlight-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48">
                  <img src={tent.image} alt={tent.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{tent.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tent.description}</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-display text-2xl font-bold text-primary">{tent.price}</span>
                    <span className="text-muted-foreground text-sm">/{tent.priceNote}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Users className="w-4 h-4" />
                    <span>{tent.capacity}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tent.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    variant={tent.popular ? "hero" : "default"}
                    className="w-full"
                    message={`Hi! I'm interested in booking the ${tent.name} at Shambhala THD.`}
                  >
                    Book This Tent
                  </WhatsAppButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={bonfireImage}
                alt="Bonfire experience"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                What's Included
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Breakfast (local Himachali cuisine)",
                  "Evening bonfire with chai",
                  "Warm bedding and heaters",
                  "24/7 assistance",
                  "Local area guide",
                  "Sunset viewpoint access",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
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
              Ready to Sleep Under the Stars?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Book your tent stay now and wake up to the most beautiful mornings of your life.
            </p>
            <WhatsAppButton
              variant="hero"
              size="xl"
              message="Hi! I want to book a tent stay at Shambhala THD. Please share availability."
            >
              Book Your Tent
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TentStayPage;
