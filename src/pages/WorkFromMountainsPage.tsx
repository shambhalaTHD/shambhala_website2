import { motion } from "framer-motion";
import { Wifi, Coffee, Monitor, Users, Check, Zap, Mountain, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import wfmImage from "@/assets/work-from-mountains.jpg";
import tentImage from "@/assets/tent-stay.jpg";

const features = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Reliable 50+ Mbps connection for seamless video calls and work.",
  },
  {
    icon: Monitor,
    title: "Dedicated Workspace",
    description: "Ergonomic setup with power backup and comfortable seating.",
  },
  {
    icon: Coffee,
    title: "Unlimited Chai & Coffee",
    description: "Stay fueled with complimentary beverages throughout the day.",
  },
  {
    icon: Users,
    title: "Co-working Community",
    description: "Connect with fellow remote workers and digital nomads.",
  },
];

const packages = [
  {
    name: "Day Pass",
    price: "₹500",
    priceNote: "per day",
    features: ["Workspace access", "WiFi", "Tea/Coffee", "Lunch included"],
  },
  {
    name: "Weekly Stay",
    price: "₹12,999",
    priceNote: "7 nights",
    features: ["Tent accommodation", "Workspace", "All meals", "WiFi", "Laundry service"],
    popular: true,
  },
  {
    name: "Monthly Retreat",
    price: "₹35,999",
    priceNote: "30 nights",
    features: ["Premium tent", "Dedicated desk", "All meals", "WiFi", "Weekend treks", "Laundry"],
  },
];

const testimonials = [
  {
    name: "Aditya Menon",
    role: "Software Engineer",
    text: "Best decision I made was to work from Shambhala for a month. My productivity went up, and I rediscovered my love for mornings.",
  },
  {
    name: "Sarah Chen",
    role: "Content Creator",
    text: "The WiFi is legit fast, the views are incredible, and the community of remote workers here is so inspiring.",
  },
];

const WorkFromMountainsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={wfmImage}
          alt="Work from mountains setup"
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
              Remote Work Paradise
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Work From Mountains
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your office with the most beautiful view in the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-accent tracking-widest uppercase">
                Digital Nomad Haven
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-6">
                Escape the City, Not Your Work
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Imagine starting your day with a sunrise over snow-capped peaks, taking lunch 
                breaks with mountain walks, and ending with bonfire conversations with fellow 
                nomads. At Shambhala, remote work becomes a life-changing experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-highlight" />
                  <span>Stable power with generator backup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-highlight" />
                  <span>50+ Mbps dedicated fiber line</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-highlight" />
                  <span>24/7 workspace access</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={tentImage}
                alt="Work setup in tent"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Amenities"
            title="Everything You Need"
            description="Work comfortably with all the essentials covered"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Plans"
            title="Choose Your Stay"
            description="Flexible options for every work schedule"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card rounded-2xl p-6 shadow-soft ${
                  pkg.popular ? "ring-2 ring-highlight" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-highlight text-highlight-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                    Best Value
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">/{pkg.priceNote}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  variant={pkg.popular ? "hero" : "default"}
                  className="w-full"
                  message={`Hi! I'm interested in the ${pkg.name} work-from-mountains package.`}
                >
                  Book Now
                </WhatsAppButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-soft"
                >
                  <p className="text-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to Change Your View?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join our community of remote workers who've discovered that the best office 
              is one with mountain views.
            </p>
            <WhatsAppButton
              variant="hero"
              size="xl"
              message="Hi! I want to book a work-from-mountains stay at Shambhala THD."
            >
              Book Your Workstation
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkFromMountainsPage;
