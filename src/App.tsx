import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import TentStayPage from "./pages/TentStayPage";
import TrekkingPage from "./pages/TrekkingPage";
import PackagesPage from "./pages/PackagesPage";
import EventsPage from "./pages/EventsPage";
import WorkFromMountainsPage from "./pages/WorkFromMountainsPage";
import MerchandisePage from "./pages/MerchandisePage";
import InvestPage from "./pages/InvestPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tent-stay" element={<TentStayPage />} />
          <Route path="/trekking" element={<TrekkingPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/work-from-mountains" element={<WorkFromMountainsPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
