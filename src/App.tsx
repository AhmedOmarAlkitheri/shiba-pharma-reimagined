import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
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

// Admin pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import PagesAdmin from "./pages/admin/PagesAdmin";
import ProductsAdmin from "./pages/admin/ProductsAdmin";
import CategoriesAdmin from "./pages/admin/CategoriesAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";
import MediaAdmin from "./pages/admin/MediaAdmin";
import SettingsAdmin from "./pages/admin/SettingsAdmin";
import MessagesAdmin from "./pages/admin/MessagesAdmin";
import SubscribersAdmin from "./pages/admin/SubscribersAdmin";
import AccountAdmin from "./pages/admin/AccountAdmin";
import { NewsAdmin, VideosAdmin, HospitalsAdmin } from "./pages/admin/SimpleCRUD";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public site */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/management" element={<Management />} />
              <Route path="/social-responsibility" element={<SocialResponsibility />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/media" element={<News />} />
              <Route path="/quality" element={<QualityManagement />} />
              <Route path="/medical-directory" element={<MedicalDirectory />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin auth */}
              <Route path="/logindashboardshiba" element={<Login />} />

              {/* Protected admin dashboard */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="pages" element={<PagesAdmin />} />
                <Route path="products" element={<ProductsAdmin />} />
                <Route path="categories" element={<CategoriesAdmin />} />
                <Route path="users" element={<UsersAdmin />} />
                <Route path="news" element={<NewsAdmin />} />
                <Route path="videos" element={<VideosAdmin />} />
                <Route path="hospitals" element={<HospitalsAdmin />} />
                <Route path="media" element={<MediaAdmin />} />
                <Route path="messages" element={<MessagesAdmin />} />
                <Route path="subscribers" element={<SubscribersAdmin />} />
                <Route path="account" element={<AccountAdmin />} />
                <Route path="settings" element={<SettingsAdmin />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
