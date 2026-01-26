import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Management from "./pages/Management";
import SocialResponsibility from "./pages/SocialResponsibility";
import QualityManagement from "./pages/QualityManagement";
import MedicalDirectory from "./pages/MedicalDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />
            
            {/* About Section */}
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/social-responsibility" element={<SocialResponsibility />} />
            
            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            
            {/* Media */}
            <Route path="/news" element={<News />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/media" element={<News />} />
            
            {/* Quality Management */}
            <Route path="/quality" element={<QualityManagement />} />
            
            {/* Medical Directory */}
            <Route path="/medical-directory" element={<MedicalDirectory />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
