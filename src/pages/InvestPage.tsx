import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, Handshake, Check, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-mountains.jpg";

const opportunities = [
  {
    icon: TrendingUp,
    title: "Investor",
    description: "Be part of our growth story. We're expanding our retreat capacity and looking for aligned investors.",
    benefits: [
      "Equity partnership options",
      "Regular returns",
      "Free stays and experiences",
      "Quarterly progress updates",
    ],
  },
  {
    icon: Handshake,
    title: "Business Partner",
    description: "Collaborate with us on travel packages, experiences, or bring your unique offering to our guests.",
    benefits: [
      "Revenue sharing model",
      "Access to our guest network",
      "Cross-promotion opportunities",
      "Flexible arrangements",
    ],
  },
  {
    icon: Users,
    title: "Retreat Leader",
    description: "Host your yoga, wellness, or creative retreat at our venue. We handle logistics, you bring the magic.",
    benefits: [
      "Venue and accommodation",
      "Catering and support staff",
      "Marketing assistance",
      "Competitive host rates",
    ],
  },
  {
    icon: Heart,
    title: "Community Partner",
    description: "NGOs, social enterprises, and community initiatives aligned with sustainable mountain tourism.",
    benefits: [
      "Collaborative projects",
      "Volunteer programs",
      "Awareness campaigns",
      "Impact partnerships",
    ],
  },
];

const InvestPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Mountain landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary-foreground/80 mb-4">
              Join Our Journey
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Invest & Partner
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Be part of building something meaningful in the mountains
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
                Grow With Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Shambhala THD is more than a business – it's a movement towards sustainable, 
                meaningful travel. Since 2018, we've hosted thousands of guests and built a 
                reputation for authentic mountain experiences. Now, we're looking for partners 
                who share our vision to grow thoughtfully.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Opportunities"
            title="Ways to Partner"
            description="Find the collaboration model that works for you"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-soft"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <opp.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{opp.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{opp.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {opp.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  variant="outline"
                  message={`Hi! I'm interested in the ${opp.title} opportunity at Shambhala THD.`}
                >
                  Learn More
                </WhatsAppButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
                Our Vision for Growth
              </h2>
              <div className="space-y-4 text-primary-foreground/90">
                <p>
                  Over the next 3 years, we aim to expand from 10 to 25 tents, add a dedicated 
                  co-working space, and establish Shambhala as the premier conscious travel 
                  destination in Himachal Pradesh.
                </p>
                <p>
                  We're committed to doing this sustainably – employing local staff, using 
                  eco-friendly materials, and ensuring tourism benefits the Tosh community.
                </p>
                <p>
                  If this resonates with you, we'd love to explore how we can grow together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Let's Talk
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Interested in partnering with us? Reach out and let's explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                variant="default"
                size="lg"
                message="Hi! I'm interested in investment/partnership opportunities at Shambhala THD."
              >
                Chat on WhatsApp
              </WhatsAppButton>
              <a href="mailto:partner@shambhalathd.com">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestPage;
