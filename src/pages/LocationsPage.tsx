import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, PageHeader, CTASection } from '@/components/ui';
import { LOCATIONS } from '@/data/site';

export default function LocationsPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
  ];

  const tier1 = LOCATIONS.filter((l) => l.priority === 'tier1');
  const gujarat = LOCATIONS.filter((l) => l.priority === 'gujarat');
  const jaipur = LOCATIONS.filter((l) => l.priority === 'jaipur');

  return (
    <>
      <Seo
        title="SEO Company in India | SEO Services Across Major Cities"
        description="Best SEO Company provides SEO services across Jaipur, Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Ahmedabad, Surat, and other major Indian cities."
        canonical="/locations"
        keywords="SEO company India, SEO company Jaipur, SEO company Delhi, SEO company Mumbai, SEO company Ahmedabad, SEO company Surat, SEO services India"
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="Locations"
        title="SEO Services Across India"
        subtitle="From our base in Jaipur, we serve businesses across India major commercial cities with localized SEO strategies."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          {/* Jaipur */}
          {jaipur.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-800">Our Home City</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {jaipur.map((loc) => (
                  <LocationCard key={loc.slug} loc={loc} />
                ))}
              </div>
            </div>
          )}

          {/* Tier 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800">Major Cities</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tier1.map((loc) => (
                <LocationCard key={loc.slug} loc={loc} />
              ))}
            </div>
          </div>

          {/* Gujarat */}
          {gujarat.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Gujarat</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gujarat.map((loc) => (
                  <LocationCard key={loc.slug} loc={loc} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

function LocationCard({ loc }: { loc: typeof LOCATIONS[0] }) {
  return (
    <Link
      to={`/locations/${loc.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 card-hover"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50 transition-colors group-hover:bg-accent-500">
        <MapPin className="h-6 w-6 text-accent-600 transition-colors group-hover:text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-navy-800">SEO Company in {loc.city}</h3>
        <p className="text-xs text-navy-400">{loc.state}</p>
      </div>
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-accent-500 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
