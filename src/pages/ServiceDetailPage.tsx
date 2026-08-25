import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import FaqAccordion from '@/components/FaqAccordion';
import { Container, Section, SectionHeading, ButtonLink, ButtonAnchor, PageHeader, CTASection } from '@/components/ui';
import { SERVICES, SITE } from '@/data/site';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'SEO Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Best SEO Company',
      url: 'https://bestseocampany.in',
    },
    areaServed: 'IN',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title={`${service.title} in Jaipur & India | Best SEO Company`}
        description={service.description}
        canonical={`/services/${service.slug}`}
        keywords={`${service.title}, ${service.shortTitle} Jaipur, ${service.shortTitle} India, SEO services`}
        breadcrumbs={breadcrumbs}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />

      <PageHeader
        eyebrow="SEO Services"
        title={service.title}
        subtitle={service.description}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/20">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-navy-800 sm:text-3xl">
                {service.title} That Drives Results
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {service.longDescription}
              </p>

              {/* Problem */}
              <div className="mt-8 rounded-2xl border border-error-100 bg-error-50 p-6">
                <h3 className="text-lg font-bold text-navy-800">The Problem</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{service.problem}</p>
              </div>

              {/* Solution */}
              <div className="mt-6 rounded-2xl border border-success-100 bg-success-50 p-6">
                <h3 className="text-lg font-bold text-navy-800">Our Solution</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{service.solution}</p>
              </div>

              {/* Benefits */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Benefits</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-500" />
                    <span className="text-sm text-navy-700">{b}</span>
                  </div>
                ))}
              </div>

              {/* What's Included */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">What's Included</h3>
              <div className="mt-4 space-y-2.5">
                {service.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                    <span className="text-sm text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="sticky top-24 rounded-2xl border border-navy-100 bg-white p-6">
                <h3 className="text-lg font-bold text-navy-800">Get Started</h3>
                <p className="mt-2 text-sm text-navy-500">
                  Request a free SEO audit and discover how our {service.shortTitle} can help your business grow.
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
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why Choose Our ${service.title}?`}
            subtitle="We combine technical expertise with data-driven strategy to deliver SEO that moves the needle."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Data-Driven Approach', desc: 'Every decision is backed by data from Search Console, analytics, and professional SEO tools.' },
              { title: 'Technical Expertise', desc: 'Deep technical knowledge ensures your SEO foundation is solid and scalable.' },
              { title: 'Transparent Reporting', desc: 'Clear monthly reports showing traffic, rankings, leads, and work completed.' },
              { title: 'Search Intent Focus', desc: 'We optimize for what searchers actually want, not just keywords.' },
              { title: 'Long-Term Strategy', desc: 'Sustainable organic growth that compounds over time, not quick fixes.' },
              { title: 'Local & National Scale', desc: 'From local Jaipur searches to national campaigns across India.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy-100 bg-white p-6 card-hover">
                <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Services */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="Related SEO Services"
            subtitle="Explore other SEO services that complement your strategy."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-2xl border border-navy-100 bg-white p-5 card-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50">
                  <s.icon className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-navy-800">{s.title}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-600">
                  Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title={`${service.title} FAQs`}
            subtitle={`Common questions about our ${service.shortTitle} services.`}
          />
          <FaqAccordion faqs={service.faqs} className="mt-12" />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
