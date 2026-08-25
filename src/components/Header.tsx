import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown, Search } from 'lucide-react';
import { SITE, SERVICES } from '@/data/site';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'SEO Services',
    to: '/services',
    dropdown: SERVICES.slice(0, 8).map((s) => ({ label: s.shortTitle, to: `/services/${s.slug}` })),
  },
  { label: 'Industries', to: '/industries' },
  {
    label: 'Locations',
    to: '/locations',
    dropdown: [
      { label: 'Jaipur', to: '/locations/jaipur' },
      { label: 'Delhi', to: '/locations/delhi' },
      { label: 'Mumbai', to: '/locations/mumbai' },
      { label: 'Bengaluru', to: '/locations/bengaluru' },
      { label: 'Ahmedabad', to: '/locations/ahmedabad' },
      { label: 'All Locations', to: '/locations' },
    ],
  },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-800/95 backdrop-blur-xl shadow-lg shadow-navy-800/10'
            : 'bg-navy-800'
        }`}
      >
        <div className="container-x">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5" aria-label="Best SEO Company Home">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/30">
                <Search className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white font-display">Best SEO</span>
                <span className="text-[10px] font-medium text-accent-300 uppercase tracking-wider">Company</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.to}
                    className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-100 transition-colors hover:text-white"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-64 rounded-2xl border border-navy-100 bg-white p-2 shadow-2xl">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-600 transition-colors hover:bg-accent-50 hover:text-accent-600"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="hidden items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md border border-white/10 transition-colors hover:bg-white/15 xl:flex"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="hidden rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:-translate-y-0.5 sm:inline-flex lg:px-6"
              >
                Free SEO Audit
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden">
            <div className="container-x py-4">
              <nav className="flex flex-col gap-1 rounded-2xl bg-navy-700 p-3">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.to}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block rounded-lg px-3 py-2 text-xs font-medium text-navy-300 transition-colors hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
                  <a href={`tel:${SITE.phone}`} className="btn-secondary w-full">
                    <Phone className="h-4 w-4" /> Call {SITE.phone}
                  </a>
                  <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-navy-100 bg-white/95 p-2 backdrop-blur-lg shadow-lg sm:hidden">
        <a href={`tel:${SITE.phone}`} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-800 px-4 py-3 text-sm font-semibold text-white">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-success-500 px-4 py-3 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
