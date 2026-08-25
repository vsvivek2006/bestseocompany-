import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import LocationsPage from '@/pages/LocationsPage';
import LocationDetailPage from '@/pages/LocationDetailPage';
import IndiaPage from '@/pages/IndiaPage';
import IndustriesPage from '@/pages/IndustriesPage';
import BlogPage from '@/pages/BlogPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import FaqsPage from '@/pages/FaqsPage';
import ThankYouPage from '@/pages/ThankYouPage';
import SitemapPage from '@/pages/SitemapPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { PrivacyPolicyPage, TermsPage, RefundPage, DisclaimerPage } from '@/pages/LegalPages';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:slug" element={<LocationDetailPage />} />
          <Route path="/india" element={<IndiaPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
