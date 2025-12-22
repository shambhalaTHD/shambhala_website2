import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Star, Tent, Mountain, Compass, Calendar, Laptop, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import ExperienceCard from "@/components/shared/ExperienceCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import BookingForm from "@/components/shared/BookingForm";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-mountains.jpg";
import tentImage from "@/assets/tent-stay.jpg";
import trekkingImage from "@/assets/trekking.jpg";
import bonfireImage from "@/assets/bonfire.jpg";
import retreatImage from "@/assets/retreat.jpg";
import toshImage from "@/assets/tosh-village.jpg";

const experiences = [
  {
    title: "Tent Stay",
    description: "Glamping under the stars with panoramic Himalayan views. Cozy tents, warm bonfires, and mountain serenity.",
    image: tentImage,
    link: "/tent-stay",
  },
  {
    title: "Trekking Adventures",
    description: "Explore hidden trails through ancient forests, alpine meadows, and snow-capped peaks with expert guides.",
    image: trekkingImage,
    link: "/trekking",
  },
  {
    title: "Events & Retreats",
    description: "Yoga retreats, music festivals, and spiritual gatherings in the heart of the Himalayas.",
    image: retreatImage,
    link: "/events",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Shambhala THD changed my life. The peace I found here, surrounded by mountains and genuine people, is something I'll carry forever. Already planning my next visit!",
  },
  {
    name: "Alex Thompson",
    location: "London, UK",
    rating: 5,
    text: "I've traveled all over India, but Tosh holds a special place. The team at Shambhala made every moment magical - from sunrise treks to bonfire nights.",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    rating: 5,
    text: "The perfect escape from city life. Beautiful tents, delicious food, and the most breathtaking views. The bonfire nights under the stars were unforgettable!",
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    text: "Best decision to come here for my solo trip. The hosts were incredibly welcoming and the Kheerganga trek was absolutely stunning. Met amazing people and created memories for lifetime.",
  },
  {
    name: "Sarah Mitchell",
    location: "Melbourne, Australia",
    rating: 5,
    text: "Came here after reading reviews and it exceeded all expectations. The tent was cozy and warm, food was delicious, and the mountain views from the property are simply breathtaking. Highly recommend!",
  },
  {
    name: "Vikram Singh",
    location: "Chandigarh",
    rating: 5,
    text: "Visited with my family and everyone loved it. Kids enjoyed the village walks, we adults loved the peaceful environment. The staff went above and beyond to make our stay comfortable.",
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "I spent a week here and didn't want to leave. The combination of adventure activities and peaceful moments by the bonfire was perfect. The local guides are knowledgeable and friendly.",
  },
  {
    name: "Arjun Mehta",
    location: "Pune",
    rating: 5,
    text: "Came here for a weekend getaway with friends. The hospitality was top-notch, tents were clean and comfortable. The night sky here is something you have to see to believe!",
  },
  {
    name: "Lisa Chen",
    location: "Singapore",
    rating: 5,
    text: "Such a peaceful retreat away from the hustle. The yoga sessions in the morning with mountain backdrop and the evening bonfires made this trip truly special. Will definitely return!",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Experience",
    description: "Browse our tent stays, treks, retreats, or custom packages.",
  },
  {
    step: "02",
    title: "Connect With Us",
    description: "Reach out via WhatsApp or fill out our booking form.",
  },
  {
    step: "03",
    title: "Plan Together",
    description: "Our team personalizes your itinerary and handles all arrangements.",
  },
  {
    step: "04",
    title: "Experience Magic",
    description: "Arrive at Tosh and let the mountains transform you.",
  },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Himalayan mountains at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-sm md:text-base font-medium tracking-widest uppercase text-primary-foreground/90 mb-4">
              Parvati Valley • Himachal Pradesh
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Find Your <motion.span
                initial={{ 
                  scale: 0.3,
                  y: -100,
                  opacity: 0.3,
                  filter: "blur(8px)"
                }}
                animate={{ 
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)"
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="inline-block font-black"
                style={{ 
                  color: "#F3FCFA",
                  textShadow: "0 0 30px rgba(243, 252, 250, 0.6), 0 4px 12px rgba(0,0,0,0.4)"
                }}
              >
                Peace
              </motion.span> in the
              <span className="block text-highlight">Sacred Mountains</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              A spiritual mountain retreat where ancient wisdom meets modern adventure. 
              Disconnect to reconnect at 8,000 feet above the ordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="hero" 
                size="xl"
                message="Hi! I want to book a stay at Shambhala THD, Tosh."
              >
                Book Your Escape
              </WhatsAppButton>
              <Link to="/about">
                <Button variant="outline" size="xl" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                  Explore More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-primary-foreground/70"
            >
              <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Location & Trust Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={toshImage}
                  alt="Tosh Village, Parvati Valley"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">Tosh, Parvati Valley</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-accent tracking-widest uppercase">Our Home</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2 mb-6">
                Where the Earth Touches the Sky
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nestled at 7,900 feet in the mystical Parvati Valley, Tosh is a hidden gem 
                beyond Kasol. Here, ancient Himalayan traditions blend with traveler spirit, 
                creating a sanctuary for seekers, dreamers, and adventurers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block font-semibold">4.9/5</span>
                    <span className="text-sm text-muted-foreground">Guest Rating</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mountain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block font-semibold">7,900 ft</span>
                    <span className="text-sm text-muted-foreground">Altitude</span>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="default" size="lg" className="gap-2">
                  Learn Our Story
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Experiences"
            title="What We Offer"
            description="From peaceful tent stays to thrilling treks, discover experiences that nourish your soul and awaken your spirit."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.title} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70">Featured</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-6">
                Bonfire Nights Under a Million Stars
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                As the sun sets behind the peaks and the valley fills with twilight magic, 
                gather around the crackling fire. Share stories, strum guitars, and witness 
                the Milky Way in its full glory - something only possible at our altitude.
              </p>
              <ul className="space-y-3 mb-8">
                {["Live acoustic music sessions", "Traditional Himachali chai", "Star-gazing with telescopes", "Meditation under the stars"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-highlight" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                variant="hero"
                size="lg"
                message="Hi! I'm interested in the bonfire night experience at Shambhala THD."
              >
                Reserve Your Spot
              </WhatsAppButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={bonfireImage}
                  alt="Bonfire gathering under stars"
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Simple Process"
            title="How Booking Works"
            description="No complex systems, no hidden fees. Just genuine human connection and seamless planning."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <WhatsAppButton
              size="lg"
              message="Hi! I want to plan my trip to Shambhala THD."
            >
              Chat on WhatsApp
            </WhatsAppButton>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Fill Booking Form
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Stories"
            title="What Our Guests Say"
            description="Real experiences from travelers who found something special in the mountains."
            className="mb-12 md:mb-16"
          />

          <div className="relative">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-[350px]">
                  <TestimonialCard {...testimonial} index={index} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                The mountains are calling. Whether you seek adventure, peace, or simply a break 
                from the ordinary – Shambhala THD awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton 
                  variant="hero" 
                  size="xl"
                  message="Hi! I'm ready to book my mountain escape at Shambhala THD!"
                >
                  Start Your Adventure
                </WhatsAppButton>
                <Link to="/contact">
                  <Button variant="outline" size="xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
