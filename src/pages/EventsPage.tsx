import { motion } from "framer-motion";
import { Calendar, Music, Sparkles, Heart, Users, Clock, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import retreatImage from "@/assets/retreat.jpg";
import bonfireImage from "@/assets/bonfire.jpg";

const events = [
  {
    name: "Full Moon Meditation",
    type: "Monthly Event",
    description: "A powerful meditation ceremony under the full moon with sound healing and breathwork.",
    date: "Every Full Moon",
    duration: "3 hours",
    price: "₹500",
    image: retreatImage,
  },
  {
    name: "Yoga & Wellness Retreat",
    type: "5-Day Retreat",
    description: "Transform your practice with daily yoga, meditation, healthy meals, and mountain hikes.",
    date: "Jan 15-20, 2025",
    duration: "5 days",
    price: "₹18,999",
    image: retreatImage,
  },
  {
    name: "Mountain Music Festival",
    type: "Annual Event",
    description: "Three days of live music, psytrance, folk, and acoustic sessions in nature.",
    date: "March 2025",
    duration: "3 days",
    price: "₹5,999",
    image: bonfireImage,
  },
  {
    name: "Digital Detox Weekend",
    type: "Monthly Retreat",
    description: "Disconnect from technology and reconnect with yourself. No phones, just presence.",
    date: "First weekend each month",
    duration: "2 days",
    price: "₹4,999",
    image: retreatImage,
  },
];

const retreatTypes = [
  {
    icon: Sparkles,
    title: "Spiritual Retreats",
    description: "Meditation, yoga, and inner exploration guided by experienced practitioners.",
  },
  {
    icon: Music,
    title: "Music Gatherings",
    description: "Acoustic nights, psytrance sessions, and jam circles under the stars.",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Detox, healing, and rejuvenation in the pristine mountain environment.",
  },
  {
    icon: Users,
    title: "Group Experiences",
    description: "Team building, creative workshops, and community celebrations.",
  },
];

const EventsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={retreatImage}
          alt="Yoga retreat in mountains"
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
              Transform & Connect
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Events & Retreats
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Gatherings that nourish the soul and create lasting connections
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retreatTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Join Us"
            title="Upcoming Events"
            description="Find an experience that resonates with your journey"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="relative h-48">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-bold text-primary">{event.price}</span>
                      <span className="text-muted-foreground text-sm"> /person</span>
                    </div>
                    <WhatsAppButton
                      message={`Hi! I'm interested in the ${event.name} at Shambhala THD.`}
                    >
                      Register
                    </WhatsAppButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Your Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-accent tracking-widest uppercase">
                Your Vision
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-6">
                Host Your Event With Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Looking to organize a retreat, workshop, or celebration? Our venue and team are 
                available to help bring your vision to life in the magical setting of Tosh.
              </p>
              <ul className="flex flex-wrap justify-center gap-6 mb-8">
                {["Corporate retreats", "Yoga teacher trainings", "Music events", "Private celebrations"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                variant="default"
                size="lg"
                message="Hi! I'd like to discuss hosting an event at Shambhala THD."
              >
                Discuss Your Event
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
              Don't Miss Out
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Spaces for our events are limited. Reserve your spot early to secure your place.
            </p>
            <WhatsAppButton
              variant="hero"
              size="xl"
              message="Hi! I'd like to know about upcoming events at Shambhala THD."
            >
              Get Event Updates
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
