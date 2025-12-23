import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import toshImage from "@/assets/tosh-village.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Tosh Village, Parvati Valley", "Kullu, Himachal Pradesh 175105"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9566026641"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["shambhalathd@gmail.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Open 24/7", "Best time to call: 9 AM - 9 PM"],
  },
];

const howToReach = [
  {
    title: "By Air",
    description: "Nearest airport is Kullu-Manali (Bhuntar) - 45 km away. We can arrange pickup.",
  },
  {
    title: "By Train",
    description: "Nearest station is Joginder Nagar - 140 km away. Chandigarh station is 270 km.",
  },
  {
    title: "By Road",
    description: "Regular buses from Delhi, Chandigarh to Kasol. From Kasol, it's 12 km to Tosh.",
  },
];

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src={toshImage}
          alt="Tosh Village"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to help plan your mountain escape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="font-display text-xl font-semibold">Prefer WhatsApp?</h3>
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  Most guests find WhatsApp the fastest way to reach us. Get instant responses 
                  and plan your trip in real-time.
                </p>
                <WhatsAppButton
                  variant="hero"
                  size="lg"
                  className="w-full"
                  message="Hi Shambhala THD! I'd like to book a stay or ask some questions."
                >
                  Chat on WhatsApp
                </WhatsAppButton>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                How to Reach Tosh
              </h2>
              <p className="text-muted-foreground">
                Getting here is part of the adventure. Here are your options.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howToReach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-soft"
                >
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-card rounded-2xl shadow-soft text-center"
            >
              <p className="text-muted-foreground mb-4">
                Need help with transportation? We can arrange pickup from Bhuntar airport 
                or Kasol for an additional charge.
              </p>
              <WhatsAppButton
                message="Hi! I need help arranging transportation to Shambhala THD, Tosh."
              >
                Arrange Pickup
              </WhatsAppButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Map integration available upon request
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Coordinates: 32.0535° N, 77.4556° E
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
