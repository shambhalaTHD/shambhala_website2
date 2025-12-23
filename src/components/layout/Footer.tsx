import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/Shambhala_Logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Tent Stay", path: "/tent-stay" },
    { name: "Trekking", path: "/trekking" },
    { name: "Travel Packages", path: "/packages" },
  ];

  const moreLinks = [
    { name: "Events & Retreats", path: "/events" },
    { name: "Merchandise", path: "/merchandise" },
    { name: "Become a Partner", path: "/invest" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Shambhala Logo" 
                className="h-16 w-auto" 
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              A spiritual mountain retreat in the heart of Parvati Valley. 
              Experience peace, adventure, and authentic Himalayan hospitality.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Tosh Village, Parvati Valley,<br />Kullu, Himachal Pradesh 175105</span>
              </li>
              <li>
                <a
                  href="tel:+919566026641"
                  className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  +91 9566026641
                </a>
              </li>
              <li>
                <a
                  href="mailto:shambhalathd@gmail.com"
                  className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  shambhalathd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>© {currentYear} Shambhala THD. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
