import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "default" | "outline" | "ghost" | "hero" | "secondary" | "accent" | "earth";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({
  message = "Hi Shambhala THD! I'm interested in booking a stay.",
  variant = "default",
  size = "default",
  className = "",
  children,
}: WhatsAppButtonProps) => {
  const phoneNumber = "919566026641";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <Button variant={variant} size={size} className={`gap-2 ${className}`}>
        <MessageCircle className="w-5 h-5" />
        {children || "Book via WhatsApp"}
      </Button>
    </a>
  );
};

export default WhatsAppButton;
