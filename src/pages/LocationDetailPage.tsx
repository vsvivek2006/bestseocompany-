import { Link, useParams, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Phone, MessageCircle, TrendingUp, Search, Building2 } from 'lucide-react';
import Seo from '@/components/Seo';
import FaqAccordion from '@/components/FaqAccordion';
import { Container, Section, SectionHeading, ButtonLink, ButtonAnchor, PageHeader, CTASection } from '@/components/ui';
import { LOCATIONS, SITE, SERVICES, JAIPUR_AREAS } from '@/data/site';

export default function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const isJaipur = location.slug === 'jaipur';
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.city, path: `/locations/${location.slug}` },
  ];

  const relatedCities = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);

  const localFaqs = [
    { q: `Do you provide SEO services in ${location.city}?`, a: `Yes, we provide comprehensive SEO services to businesses in ${location.city}. Our team works with local businesses, startups, and enterprises to improve organic search visibility and drive qualified traffic.` },
    { q: `How long does SEO take for ${location.city} businesses?`, a: `SEO timelines depend on your industry, competition, and current website state. Most ${location.city} businesses see initial improvements in 3-4 months, with significant results in 6-12 months.` },
    { q: `Can you help with local SEO in ${location.city}?`, a: `Yes, we specialize in local SEO for ${location.city} businesses. We optimize Google Business Profiles, build local citations, and create location-specific landing pages to improve your visibility in local searches.` },
    { q: `How much does SEO cost in ${location.city}?`, a: `SEO costs vary based on scope, industry competitiveness, and target keywords. We provide custom proposals after understanding your requirements. Contact us for a personalized quote.` },
  ];

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Best SEO Company - ${location.city}`,
    description: `SEO Company in ${location.city} providing technical SEO, local SEO, on-page SEO, ecommerce SEO, and SEO audit services.`,
    url: `https://bestseocampany.in/locations/${location.slug}`,
    telephone: '+916207300553',
    areaServed: location.city,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pincode,
      addressCountry: 'IN',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title={`SEO Company in ${location.city} | Best SEO Agency in ${location.city}`}
        description={`Looking for an SEO company in ${location.city}? Best SEO Company provides technical SEO, local SEO, on-page SEO, ecommerce SEO, and SEO audit services to businesses in ${location.city}, ${location.state}.`}
        canonical={`/locations/${location.slug}`}
        keywords={`SEO company ${location.city}, SEO agency ${location.city}, SEO services ${location.city}, best SEO company ${location.city}, local SEO ${location.city}`}
        breadcrumbs={breadcrumbs}
        jsonLd={[localBusinessJsonLd, faqJsonLd]}
      />

      <PageHeader
        eyebrow="Location"
        title={`SEO Company in ${location.city}`}
        subtitle={`Data-driven SEO services for businesses in ${location.city}, ${location.state}. We help you rank higher, drive qualified traffic, and grow organic leads.`}
        breadcrumbs={breadcrumbs}
      />

      {/* Introduction */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                SEO Services in {location.city}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-600">
                <p>
                  {location.description}
                </p>
                <p>
                  {location.city} businesses face unique search challenges — from local competition to industry-specific keyword targeting. Our SEO strategies are tailored to the {location.city} market, combining technical expertise with local search optimization to help your business stand out.
                </p>
                {isJaipur && (
                  <p>
                    As our home city, we have deep knowledge of the Jaipur business landscape. From our office at {SITE.address.full}, we work with businesses across all major Jaipur areas including {JAIPUR_AREAS.slice(0, 5).join(', ')}, and more.
                  </p>
                )}
              </div>

              {/* SEO Market */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">The SEO Market in {location.city}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                {location.city} is a growing commercial hub in {location.state}, and businesses here are increasingly competing for online visibility. Whether you are a local shop targeting nearby customers or a growing company reaching a national audience, SEO is essential for capturing high-intent search traffic. Our {location.city} SEO services are designed to give you an edge in this competitive market.
              </p>

              {/* Services Available */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">SEO Services Available in {location.city}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {SERVICES.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 card-hover"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                      <s.icon className="h-5 w-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-800">{s.title}</h4>
                      <p className="mt-1 text-xs text-navy-500">{s.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Local SEO */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Local SEO in {location.city}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                For businesses serving customers in {location.city}, local SEO is critical. We optimize your Google Business Profile, build consistent local citations, create location landing pages, and implement local schema markup so you appear in the Google Local Pack and Maps results when customers search for services near them.
              </p>

              {/* Technical SEO */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Technical SEO for {location.city} Businesses</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                A strong technical foundation is essential for ranking in {location.city} search results. We fix crawlability issues, improve Core Web Vitals, optimize site architecture, and implement structured data to ensure search engines can efficiently crawl and rank your website.
              </p>

              {/* Industries Served */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Industries We Serve in {location.city}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Real Estate', 'Ecommerce', 'Healthcare', 'SaaS', 'Manufacturing', 'Education', 'Hospitality', 'Legal', 'Finance', 'Local Business', 'B2B', 'Startup'].map((ind) => (
                  <span key={ind} className="rounded-lg bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700">
                    {ind} SEO
                  </span>
                ))}
              </div>

              {/* Why Choose Us */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Why Choose Best SEO Company in {location.city}?</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: TrendingUp, title: 'Data-Driven Results', desc: 'Every strategy is backed by data and measured against business outcomes.' },
                  { icon: Search, title: 'Search Intent Focus', desc: 'We optimize for what your customers actually search for, not just keywords.' },
                  { icon: Building2, title: 'Local Expertise', desc: `Deep understanding of the ${location.city} market and local search landscape.` },
                  { icon: CheckCircle2, title: 'Transparent Reporting', desc: 'Clear monthly reports showing traffic, rankings, leads, and work completed.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                    <item.icon className="h-6 w-6 flex-shrink-0 text-accent-600" />
                    <div>
                      <h4 className="text-sm font-bold text-navy-800">{item.title}</h4>
                      <p className="mt-1 text-xs text-navy-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Jaipur Areas */}
              {isJaipur && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-navy-800">Areas We Serve in Jaipur</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {JAIPUR_AREAS.map((area) => (
                      <span key={area} className="inline-flex items-center gap-1.5 rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700">
                        <MapPin className="h-3 w-3 text-accent-500" />
                        {area}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* FAQs */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">{location.city} SEO FAQs</h3>
              <FaqAccordion faqs={localFaqs} className="mt-5" />
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-navy-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-navy-800">Get a Free SEO Audit</h3>
                  <p className="mt-2 text-sm text-navy-500">
                    Find out why your website is not ranking in {location.city} and get a prioritized action plan.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <ButtonLink to="/contact" variant="primary">
                      Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonAnchor href={`tel:${SITE.phone}`} variant="outline">
                      <Phone className="h-4 w-4" /> {SITE.phone}
                    </ButtonAnchor>
                    <ButtonAnchor href={SITE.whatsappLink} variant="ghost">
                      <MessageCircle className="h-4 w-4 text-success-500" /> WhatsApp {SITE.whatsapp}
                    </ButtonAnchor>
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
                  <h3 className="text-sm font-bold text-navy-800">Our Office</h3>
                  <p className="mt-2 text-sm text-navy-600">{SITE.address.full}</p>
                  <p className="mt-3 text-xs text-navy-400">Serving {location.city} and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Cities */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Nearby Locations"
            title={`SEO Services in Nearby Cities`}
            subtitle="We serve businesses across India. Explore our SEO services in other cities."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {relatedCities.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group flex items-center gap-2 rounded-xl border border-navy-100 bg-white p-3 card-hover"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-accent-500" />
                <span className="text-xs font-semibold text-navy-700">{loc.city}</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Ready to Grow Your Search Visibility in ${location.city}?`}
        subtitle={`Get a free SEO audit and discover how we can help your ${location.city} business rank higher and drive more qualified leads.`}
      />
    </>
  );
}
