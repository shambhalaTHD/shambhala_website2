import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Shambhala Classic Tee",
    description: "Soft cotton t-shirt with our signature mountain logo. Available in black and forest green.",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  },
  {
    id: 2,
    name: "Mountain Vibes Hoodie",
    description: "Cozy fleece hoodie perfect for mountain evenings. Unisex fit.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
  },
  {
    id: 3,
    name: "Parvati Valley Cap",
    description: "Embroidered cap with adjustable strap. One size fits all.",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
  },
  {
    id: 4,
    name: "Himalayan Explorer Jacket",
    description: "Lightweight windbreaker with water-resistant coating. Perfect for treks.",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
  },
];

const MerchandisePage = () => {
  const handleOrder = (productName: string) => {
    const message = `Hi! I'd like to order the ${productName} from Shambhala THD merchandise.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Take the Mountains Home
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Merchandise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carry a piece of Shambhala wherever you go
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => handleOrder(product.name)}
                      className="gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                How to Order
              </h2>
              <p className="text-muted-foreground mb-6">
                Our merchandise is ordered via WhatsApp for a personal touch. Click the order 
                button, tell us your size and shipping address, and we'll handle the rest. 
                Shipping across India available.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>• Free shipping above ₹1,500</span>
                <span>• Cash on delivery available</span>
                <span>• 7-day returns</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MerchandisePage;
