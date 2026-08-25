import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Container, Section, PageHeader } from '@/components/ui';
import { SERVICES, LOCATIONS, INDUSTRIES, BLOG_POSTS, CASE_STUDIES } from '@/data/site';

export default function SitemapPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  const linkClass = 'text-sm text-navy-600 transition-colors hover:text-accent-600';

  return (
    <>
      <Seo
        title="Sitemap | Best SEO Company"
        description="Complete sitemap of Best SEO Company website. Find all our pages including services, locations, industries, blog posts, and more."
        canonical="/sitemap"
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="Navigation"
        title="Sitemap"
        subtitle="Find all pages on our website organized by category."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Pages */}
            <div>
              <h2 className="text-lg font-bold text-navy-800">Main Pages</h2>
              <ul className="mt-4 space-y-2.5">
                <li><Link to="/" className={linkClass}>Home</Link></li>
                <li><Link to="/about" className={linkClass}>About</Link></li>
                <li><Link to="/contact" className={linkClass}>Contact</Link></li>
                <li><Link to="/services" className={linkClass}>SEO Services</Link></li>
                <li><Link to="/industries" className={linkClass}>Industries</Link></li>
                <li><Link to="/locations" className={linkClass}>Locations</Link></li>
                <li><Link to="/case-studies" className={linkClass}>Case Studies</Link></li>
                <li><Link to="/blog" className={linkClass}>Blog</Link></li>
                <li><Link to="/faqs" className={linkClass}>FAQs</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-lg font-bold text-navy-800">SEO Services</h2>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-lg font-bold text-navy-800">Locations</h2>
              <ul className="mt-4 space-y-2.5">
                {LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link to={`/locations/${l.slug}`} className={linkClass}>SEO Company in {l.city}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-lg font-bold text-navy-800">Industries</h2>
              <ul className="mt-4 space-y-2.5">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.slug}>
                    <Link to="/industries" className={linkClass}>{ind.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h2 className="text-lg font-bold text-navy-800">Blog Posts</h2>
              <ul className="mt-4 space-y-2.5">
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug}>
                    <Link to="/blog" className={linkClass}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-lg font-bold text-navy-800">Legal</h2>
              <ul className="mt-4 space-y-2.5">
                <li><Link to="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className={linkClass}>Terms & Conditions</Link></li>
                <li><Link to="/refund-policy" className={linkClass}>Refund Policy</Link></li>
                <li><Link to="/disclaimer" className={linkClass}>Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
