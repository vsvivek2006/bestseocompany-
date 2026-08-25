import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2, MapPin,
  Search, TrendingUp, Building2, ExternalLink, Star,
} from 'lucide-react';
import Seo from '@/components/Seo';
import SeoDashboard from '@/components/SeoDashboard';
import FaqAccordion from '@/components/FaqAccordion';
import { Container, Section, SectionHeading, ButtonLink, ButtonAnchor, Card } from '@/components/ui';
import {
  SITE, SERVICES, INDUSTRIES, LOCATIONS, WHY_CHOOSE_US, PROCESS_STEPS,
  TRUST_INDICATORS, HOME_FAQS, AUDIT_FEATURES, JAIPUR_AREAS, CASE_STUDIES,
} from '@/data/site';

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Best SEO Company',
    url: 'https://bestseocampany.in/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bestseocampany.in/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title="Best SEO Company in Jaipur & India | SEO Agency"
        description="Best SEO Company in Jaipur & India — data-driven SEO strategies that build rankings, organic traffic & qualified leads. Technical SEO, local SEO, ecommerce SEO, enterprise SEO & more."
        canonical="/"
        keywords="SEO Company, Best SEO Company, SEO Agency, SEO Services, SEO Company in Jaipur, Best SEO Company in Jaipur, SEO Agency in Jaipur, SEO Services in Jaipur, SEO Company in India"
        jsonLd={[homeJsonLd, faqJsonLd]}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-navy-800 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl" />

        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <span className="eyebrow-dark">
                <span className="h-2 w-2 rounded-full bg-success-500 animate-pulse-soft" />
                #1 SEO Company in Jaipur & India
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Best SEO Company in{' '}
                <span className="gradient-text">Jaipur & India</span>
              </h1>
              <p className="mt-5 text-lg text-navy-200 sm:text-xl">
                Data-Driven SEO Strategies That Build Rankings, Organic Traffic & Qualified Leads
              </p>
              <p className="mt-4 max-w-xl text-base text-navy-300">
                We help businesses improve their organic visibility through technical SEO, on-page optimization, content strategy, local SEO, authority building and conversion-focused search strategies.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink to="/contact" variant="primary">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  Talk to an SEO Expert
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-navy-200 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-accent-400" />
                  {SITE.phone}
                </a>
                <span className="text-navy-500">|</span>
                <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-200 transition-colors hover:text-white">
                  <MessageCircle className="h-4 w-4 text-success-500" />
                  WhatsApp: {SITE.whatsapp}
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <SeoDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / AUTHORITY SECTION ===== */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="SEO Built Around Business Growth, Not Just Rankings"
            subtitle="We focus on the metrics that matter — organic traffic, qualified leads, and revenue — not vanity metrics. Our SEO strategies are built on six core pillars."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TRUST_INDICATORS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white p-5 text-center card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                  <item.icon className="h-6 w-6 text-accent-600" />
                </div>
                <span className="text-sm font-semibold text-navy-700">{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== SEO SERVICES SECTION ===== */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Complete SEO Services for Sustainable Organic Growth"
            subtitle="From technical foundations to content strategy and authority building — we cover every layer of search engine optimization."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-sm card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/20">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/services" variant="outline">
              View All SEO Services <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ===== WHY CHOOSE US ===== */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Businesses Choose Best SEO Company"
            subtitle="We combine technical expertise, data-driven strategy, and transparent reporting to deliver SEO that actually moves the needle for your business."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
              <Card key={item.title} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50 transition-colors group-hover:bg-accent-500">
                    <item.icon className="h-6 w-6 text-accent-600 transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== SEO PROCESS ===== */}
      <Section className="bg-navy-800 text-white" dark>
        <Container>
          <SectionHeading
            dark
            eyebrow="Our Process"
            title="A Proven 6-Step SEO Process"
            subtitle="Every SEO engagement follows a structured, data-driven process designed to deliver measurable results."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="group relative">
                <div className="glass-card p-6 transition-all duration-300 hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-white/10 font-display">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20">
                      <step.icon className="h-6 w-6 text-accent-400" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="SEO Expertise Across Industries"
            subtitle="We understand that each industry has unique search behavior, competition, and customer intent. Our SEO strategies are tailored to your sector."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.slice(0, 8).map((industry) => (
              <Link
                key={industry.slug}
                to="/industries"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white p-6 text-center card-hover"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 transition-colors group-hover:bg-accent-500">
                  <industry.icon className="h-7 w-7 text-accent-600 transition-colors group-hover:text-white" />
                </div>
                <span className="text-sm font-semibold text-navy-700">{industry.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/industries" variant="outline">
              View All Industries <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ===== LOCATION SECTION ===== */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title="SEO Services Across Jaipur, India & Major Business Cities"
            subtitle="From our Jaipur office, we serve businesses across India major commercial cities with localized SEO strategies."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {LOCATIONS.slice(0, 10).map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 card-hover"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <div>
                  <div className="text-sm font-bold text-navy-800">{loc.city}</div>
                  <div className="text-xs text-navy-400">SEO Company</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/locations" variant="outline">
              View All Locations <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ===== JAIPUR LOCAL SEO SECTION ===== */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Jaipur SEO</span>
              <h2 className="section-title mt-4 text-navy-800">
                A Jaipur SEO Agency Focused on Local & National Growth
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-600">
                Based in Jagatpura, Jaipur, we understand the local business landscape and the unique search behavior of customers in the Pink City. Our Jaipur SEO services combine deep local knowledge with national-level SEO expertise.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50 p-4">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                <div>
                  <div className="text-sm font-semibold text-navy-800">Our Office</div>
                  <div className="text-sm text-navy-600">{SITE.address.full}</div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-navy-700">Areas We Serve in Jaipur</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {JAIPUR_AREAS.map((area) => (
                    <span key={area} className="rounded-lg bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <ButtonLink to="/locations/jaipur" variant="primary">
                  Explore Jaipur SEO Services <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Search, label: 'Local SEO', desc: 'Rank in Jaipur local searches and Google Maps' },
                { icon: TrendingUp, label: 'Organic Growth', desc: 'Sustainable rankings for Jaipur keywords' },
                { icon: MapPin, label: 'Local Citations', desc: 'Consistent NAP across local directories' },
                { icon: Building2, label: 'GBP Optimization', desc: 'Google Business Profile setup and management' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-navy-100 bg-white p-5 card-hover">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
                    <item.icon className="h-5 w-5 text-accent-600" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-navy-800">{item.label}</h3>
                  <p className="mt-1 text-xs text-navy-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== PARENT COMPANY SECTION ===== */}
      <Section className="bg-navy-50">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <span className="eyebrow">Parent Company</span>
                <h2 className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">
                  Powered by {SITE.parentCompany}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  Best SEO Company operates as a specialized SEO brand under {SITE.parentCompany}, providing search engine optimization and digital growth services for businesses targeting local, national, and competitive search markets.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <ButtonAnchor href={SITE.parentWebsite} variant="primary" >
                  Visit Growth Service <ExternalLink className="h-4 w-4" />
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== CASE STUDIES SECTION ===== */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Real SEO Results, Transparent Reporting"
            subtitle="See how our data-driven SEO strategies have helped businesses grow organic traffic, keyword visibility, and qualified leads."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                to="/case-studies"
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm card-hover"
              >
                <div className="mb-4 inline-flex w-fit rounded-lg bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                  {cs.industry}
                </div>
                <h3 className="text-lg font-bold text-navy-800">{cs.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{cs.challenge}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy-100 pt-5">
                  {cs.results.slice(0, 4).map((r) => (
                    <div key={r.label}>
                      <div className="text-xl font-bold text-accent-600">{r.value}</div>
                      <div className="text-xs text-navy-400">{r.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/case-studies" variant="outline">
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ===== SEO AUDIT CTA SECTION ===== */}
      <Section className="bg-navy-800 text-white" dark>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow-dark">Free SEO Audit</span>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
                  Want to Know Why Your Website Isn't Ranking?
                </h2>
                <p className="mt-4 text-lg text-navy-200">
                  Get a detailed SEO audit covering technical SEO, on-page, content, keywords, links, competitors, and Core Web Vitals.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {AUDIT_FEATURES.map((feature) => (
                  <span key={feature} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-navy-100">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success-500" />
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink to="/contact" variant="primary">
                  Get My Free SEO Audit <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonAnchor href={`tel:${SITE.phone}`} variant="secondary">
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== FAQ SECTION ===== */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            subtitle="Common questions about SEO, our services, and how we help businesses grow organic search traffic."
          />
          <FaqAccordion faqs={HOME_FAQS} className="mt-12" />
          <div className="mt-10 text-center">
            <ButtonLink to="/faqs" variant="ghost">
              View All FAQs <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
