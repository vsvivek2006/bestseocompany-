import { Link } from 'react-router-dom';
import { Search, Phone, MessageCircle, MapPin, Mail, ArrowRight } from 'lucide-react';
import { SITE, SERVICES, LOCATIONS } from '@/data/site';

const FOOTER_SERVICES = [
  { label: 'SEO Services', to: '/services/seo-services' },
  { label: 'Local SEO', to: '/services/local-seo' },
  { label: 'Technical SEO', to: '/services/technical-seo' },
  { label: 'On-Page SEO', to: '/services/on-page-seo' },
  { label: 'Ecommerce SEO', to: '/services/ecommerce-seo' },
  { label: 'SEO Audit', to: '/services/seo-audit' },
];

const FOOTER_LOCATIONS = LOCATIONS.slice(0, 8).map((l) => ({
  label: l.city,
  to: `/locations/${l.slug}`,
}));

const FOOTER_COMPANY = [
  { label: 'About', to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
  { label: 'Sitemap', to: '/sitemap' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Disclaimer', to: '/disclaimer' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Company */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500">
                <Search className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white font-display">Best SEO</span>
                <span className="text-[10px] font-medium text-accent-300 uppercase tracking-wider">Company</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              Best SEO Company provides data-driven SEO strategies that build rankings, organic traffic, and qualified leads for businesses across Jaipur and India.
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-navy-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <span>{SITE.address.full}</span>
              </div>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-navy-300 transition-colors hover:text-white">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent-400" />
                {SITE.phone}
              </a>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-navy-300 transition-colors hover:text-white">
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-accent-400" />
                WhatsApp: {SITE.whatsapp}
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">SEO Services</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-navy-300 transition-colors hover:text-accent-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Locations</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LOCATIONS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-navy-300 transition-colors hover:text-accent-400">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/locations" className="inline-flex items-center gap-1 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300">
                  View All Locations <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-navy-300 transition-colors hover:text-accent-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-navy-300 transition-colors hover:text-accent-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Parent company */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-navy-300">
                A <span className="font-semibold text-white">{SITE.parentCompany}</span> brand
              </p>
              <p className="mt-1 text-xs text-navy-400">
                Best SEO Company operates as a specialized SEO brand under {SITE.parentCompany}.
              </p>
            </div>
            <a
              href={SITE.parentWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Visit Growth Service <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-navy-400">
              &copy; 2026 Best SEO Company. All Rights Reserved.
            </p>
            <p className="text-xs text-navy-400">
              A {SITE.parentCompany} brand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
