import { motion } from "framer-motion";
import { Heart, Leaf, Mountain, Users, Sparkles, Sun } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import heroImage from "@/assets/hero-mountains.jpg";
import toshImage from "@/assets/tosh-village.jpg";
import retreatImage from "@/assets/retreat.jpg";

const values = [
  {
    icon: Heart,
    title: "Authentic Hospitality",
    description: "We treat every guest as family, offering genuine Himalayan warmth and care.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "Protecting our mountains through eco-friendly practices and community support.",
  },
  {
    icon: Mountain,
    title: "Adventure Spirit",
    description: "Creating safe yet thrilling experiences that push boundaries and open minds.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Connection",
    description: "Honoring the sacred energy of the Himalayas through mindful experiences.",
  },
];

const team = [
  {
    name: "Ravi Kumar",
    role: "Founder & Guide",
    bio: "Born in these mountains, Ravi has spent 15 years sharing the secrets of Parvati Valley with travelers from around the world.",
  },
  {
    name: "Sunita Devi",
    role: "Hospitality Head",
    bio: "A local from Tosh, Sunita ensures every guest experiences the authentic warmth of Himalayan hospitality.",
  },
  {
    name: "Vikram Singh",
    role: "Trek Leader",
    bio: "Certified mountaineer with expeditions across the Himalayas. Safety and adventure are his expertise.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Himalayan mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              About Shambhala THD
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              A sanctuary born from love for the mountains and a dream to share their magic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-accent tracking-widest uppercase">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                From a Dream to a Sanctuary
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shambhala THD was born in 2018 when our founder, Ravi, returned to his ancestral 
                  village of Tosh after years in the city. What he found was a place of profound 
                  beauty being discovered by travelers from around the world – seekers looking for 
                  something authentic.
                </p>
                <p>
                  "THD" stands for "The Himalayan Dream" – a vision to create a space where 
                  travelers could experience the true essence of the mountains: not as tourists, 
                  but as temporary members of our community.
                </p>
                <p>
                  Today, we've grown from a single tent to a full-fledged retreat, but our heart 
                  remains the same: sharing the peace, adventure, and spiritual depth of Parvati 
                  Valley with anyone willing to make the journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={toshImage}
                alt="Tosh Village"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elevated">
                <p className="font-display text-3xl font-bold text-primary">Since 2018</p>
                <p className="text-muted-foreground">Welcoming travelers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="What Guides Us"
            title="Our Values"
            description="The principles that shape every experience at Shambhala THD"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Meet the Team"
            title="The Hearts Behind Shambhala"
            description="Local experts who make your mountain experience unforgettable"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-3xl font-semibold text-secondary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
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
              Come Experience Our Story
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Every guest becomes part of the Shambhala family. We'd love to welcome you.
            </p>
            <WhatsAppButton
              variant="hero"
              size="xl"
              message="Hi! I'd love to learn more about staying at Shambhala THD."
            >
              Get in Touch
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
