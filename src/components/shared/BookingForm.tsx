import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingFormProps {
  experience?: string;
}

const BookingForm = ({ experience = "General Inquiry" }: BookingFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    experience: experience,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is UI only - no actual submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl p-8 text-center shadow-soft"
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-6">
          Your inquiry has been received. Our team will contact you via WhatsApp within 24 hours.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-soft"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
        Book Your Experience
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Full Name *
          </label>
          <Input
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Phone (WhatsApp) *
          </label>
          <Input
            type="tel"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Email
        </label>
        <Input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Check-in
          </label>
          <Input
            type="date"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Check-out
          </label>
          <Input
            type="date"
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Guests
          </label>
          <Select
            value={formData.guests}
            onValueChange={(value) => setFormData({ ...formData, guests: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5+">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Experience Type
        </label>
        <Select
          value={formData.experience}
          onValueChange={(value) => setFormData({ ...formData, experience: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tent Stay">Tent Stay</SelectItem>
            <SelectItem value="Trekking">Trekking</SelectItem>
            <SelectItem value="Custom Package">Custom Package</SelectItem>
            <SelectItem value="Events & Retreats">Events & Retreats</SelectItem>
            <SelectItem value="Work From Mountains">Work From Mountains</SelectItem>
            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Message
        </label>
        <Textarea
          placeholder="Tell us about your requirements..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" size="lg" className="w-full gap-2">
        <Send className="w-5 h-5" />
        Send Inquiry
      </Button>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Or reach us directly via WhatsApp for instant booking
      </p>
    </motion.form>
  );
};

export default BookingForm;
