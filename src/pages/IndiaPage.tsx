import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, MessageCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, ButtonLink, ButtonAnchor, PageHeader, CTASection } from '@/components/ui';
import { SITE, LOCATIONS } from '@/data/site';

export default function IndiaPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'India', path: '/locations' },
  ];

  const majorCities = LOCATIONS.slice(0, 12);

  return (
    <>
      <Seo
        title="SEO Company in India | Best SEO Agency in India"
        description="Best SEO Company in India — data-driven SEO strategies for businesses across India. Technical SEO, local SEO, ecommerce SEO, enterprise SEO. Serving Jaipur, Delhi, Mumbai, Bengaluru & more."
        canonical="/locations"
        keywords="SEO company in India, best SEO company in India, SEO agency in India, SEO services India, SEO expert India, SEO consultant India"
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="National SEO"
        title="SEO Company in India"
        subtitle="Data-driven SEO services for businesses across India. From our Jaipur base, we help companies in every major Indian city rank higher and grow organic traffic."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                SEO Services Across India
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-600">
                <p>
                  India digital economy is growing rapidly, and businesses across the country are competing for visibility in search results. Whether you are a local business in Jaipur, a startup in Bengaluru, or an enterprise in Mumbai, SEO is essential for capturing high-intent search traffic.
                </p>
                <p>
                  Best SEO Company provides comprehensive SEO services to businesses across India. While our office is in Jaipur, we work with clients remotely across all major Indian cities. Our data-driven approach combines technical expertise, content strategy, and authority building to deliver sustainable organic growth.
                </p>
                <p>
                  We understand the Indian search landscape — from local search behavior in different cities to national-level keyword competition. Our strategies are tailored to your target market, whether you are focusing on a single city or reaching customers across India.
                </p>
              </div>

              <h3 className="mt-10 text-xl font-bold text-navy-800">Why Choose an India-Based SEO Company?</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Local Market Understanding', desc: 'We understand Indian search behavior, local languages, and regional market dynamics.' },
                  { title: 'Cost-Effective Services', desc: 'Get premium SEO services at competitive rates compared to international agencies.' },
                  { title: 'Same Time Zone', desc: 'Work with a team in your time zone for seamless communication and collaboration.' },
                  { title: 'National & Local Scale', desc: 'From single-city local SEO to national campaigns across all Indian markets.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-500" />
                    <div>
                      <h4 className="text-sm font-bold text-navy-800">{item.title}</h4>
                      <p className="mt-1 text-xs text-navy-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 text-xl font-bold text-navy-800">SEO Services for Indian Businesses</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  'Technical SEO audits and optimization',
                  'Local SEO for city-specific visibility',
                  'On-page SEO and content optimization',
                  'Ecommerce SEO for online stores',
                  'Enterprise SEO for large websites',
                  'Link building and authority development',
                  'SEO audits and competitive analysis',
                  'International SEO for global reach',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-navy-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-navy-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-navy-800">Get a Free SEO Audit</h3>
                  <p className="mt-2 text-sm text-navy-500">
                    Find out how your website performs in Indian search results and get a prioritized action plan.
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
                  <h3 className="text-sm font-bold text-navy-800">Our Base</h3>
                  <p className="mt-2 text-sm text-navy-600">{SITE.address.full}</p>
                  <p className="mt-3 text-xs text-navy-400">Serving clients across all of India</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Major Cities */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Major Cities"
            title="SEO Services in Major Indian Cities"
            subtitle="We serve businesses across India major commercial cities. Explore our city-specific SEO services."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {majorCities.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 card-hover"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <div>
                  <div className="text-sm font-bold text-navy-800">{loc.city}</div>
                  <div className="text-xs text-navy-400">SEO Company</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to Grow Your Organic Search Traffic in India?"
        subtitle="Get a free SEO audit and discover how we can help your business rank higher across India."
      />
    </>
  );
}
