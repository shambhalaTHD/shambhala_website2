import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, MapPin, Check, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import heroImage from "@/assets/hero-mountains.jpg";
import tentImage from "@/assets/tent-stay.jpg";
import trekkingImage from "@/assets/trekking.jpg";
import bonfireImage from "@/assets/bonfire.jpg";

const packages = [
  {
    name: "Weekend Escape",
    tagline: "Perfect for short getaways",
    duration: "1 Night / 2 Days",
    price: "₹6,000",
    priceNote: "per person",
    image: tentImage,
    includes: [
      "Luxury tent accommodation",
      "2 meals included",
      "1 trek included",
      "Local village walk",
      "Pickup from selected location",
    ],
    popular: false,
    hasPickupOptions: true,
    pickupOptions: [
      { label: "Kasol to Kasol", value: "kasol", price: 6000 },
      { label: "Delhi to Delhi", value: "delhi", price: 8000 },
    ],
  },
  {
    name: "Long Weekend",
    tagline: "Our most popular package",
    duration: "1 Night / 2 Days",
    price: "₹6,000",
    priceNote: "per person",
    image: trekkingImage,
    includes: [
      "Luxury tent accommodation",
      "2 meals included",
      "Treks included",
      "Local village walk",
      "Pickup from selected location",
    ],
    popular: true,
    hasPickupOptions: true,
    pickupOptions: [
      { label: "Kasol to Kasol", value: "kasol", price: 6000 },
      { label: "Delhi to Delhi", value: "delhi", price: 8000 },
    ],
  },
  {
    name: "Ultimate Adventure",
    tagline: "For the true explorer",
    duration: "7 Nights / 8 Days",
    price: "₹22,999",
    priceNote: "per person",
    image: bonfireImage,
    includes: [
      "Premium tent stay",
      "All meals included",
      "2 treks included",
      "Malana village visit",
      "Meditation sessions",
      "Photography tour",
      "Airport/station pickup",
    ],
    popular: false,
  },
];

const PackagesPage = () => {
  const [selectedPickup, setSelectedPickup] = useState<{[key: string]: string}>({
    "Weekend Escape": "kasol",
    "Long Weekend": "kasol"
  });

  const getPackagePrice = (pkg: any) => {
    if (pkg.hasPickupOptions && selectedPickup[pkg.name]) {
      const option = pkg.pickupOptions.find((opt: any) => opt.value === selectedPickup[pkg.name]);
      return option ? `₹${option.price.toLocaleString('en-IN')}` : pkg.price;
    }
    return pkg.price;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Mountain panorama"
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
              All-Inclusive
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Travel Packages
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Curated experiences for every type of traveler
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
                Complete Mountain Experiences
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Don't want to plan every detail? Our curated packages bundle accommodation, meals, 
                activities, and transportation into seamless experiences. Just pack your bags and 
                leave the rest to us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all ${
                  pkg.popular ? "ring-2 ring-highlight lg:scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="bg-highlight text-highlight-foreground text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                <div className="relative h-48">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {pkg.tagline}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mt-1 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  
                  {pkg.hasPickupOptions && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Pickup Location:</label>
                      <select
                        value={selectedPickup[pkg.name] || pkg.pickupOptions[0].value}
                        onChange={(e) => setSelectedPickup({...selectedPickup, [pkg.name]: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {pkg.pickupOptions.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label} - ₹{option.price.toLocaleString('en-IN')}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-3xl font-bold text-primary">{getPackagePrice(pkg)}</span>
                    <span className="text-muted-foreground text-sm">/{pkg.priceNote}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton
                    variant={pkg.popular ? "hero" : "default"}
                    className="w-full"
                    message={`Hi! I'm interested in the ${pkg.name} package at Shambhala THD.`}
                  >
                    Book This Package
                  </WhatsAppButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-accent tracking-widest uppercase">
                Something Special
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-6">
                Need a Custom Package?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Planning a group trip, corporate retreat, or special celebration? We'll create a 
                personalized package tailored to your needs, budget, and timeline.
              </p>
              <WhatsAppButton
                variant="default"
                size="lg"
                message="Hi! I'd like to discuss a custom travel package at Shambhala THD."
              >
                Discuss Custom Package
              </WhatsAppButton>
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
              Let's Plan Your Journey
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Have questions about our packages? Our team is here to help you choose the perfect experience.
            </p>
            <WhatsAppButton
              variant="hero"
              size="xl"
              message="Hi! I need help choosing the right package at Shambhala THD."
            >
              Get Recommendations
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PackagesPage;
