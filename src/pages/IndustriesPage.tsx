import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, PageHeader, CTASection } from '@/components/ui';
import { INDUSTRIES } from '@/data/site';

export default function IndustriesPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <>
      <Seo
        title="Industry-Specific SEO Services | Best SEO Company"
        description="SEO services tailored to your industry. Real estate, ecommerce, healthcare, SaaS, manufacturing, education, legal, finance, hospitality, and more. Industry-specific SEO strategies."
        canonical="/industries"
        keywords="industry SEO, real estate SEO, ecommerce SEO, healthcare SEO, SaaS SEO, manufacturing SEO, education SEO, legal SEO, finance SEO, B2B SEO"
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="Industries"
        title="SEO Expertise Across Industries"
        subtitle="Each industry has unique search behavior, competition, and customer intent. Our SEO strategies are tailored to your sector."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.slug}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm card-hover"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/20">
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy-800">{industry.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{industry.description}</p>
                <div className="mt-4 space-y-1.5">
                  {[
                    'Technical SEO audit',
                    'Keyword research',
                    'Content strategy',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-navy-600">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-success-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700"
                >
                  Get started <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Industry-Specific SEO Matters */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Why It Matters"
            title="Why Industry-Specific SEO Matters"
            subtitle="Generic SEO strategies do not work. Each industry has different search patterns, competitor landscapes, and customer expectations."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Unique Search Intent', desc: 'A healthcare patient searches differently than a SaaS buyer. We map search intent for your industry.' },
              { title: 'Competitor Landscape', desc: 'Each industry has different competitors and authority levels. We analyze your specific competitive landscape.' },
              { title: 'Content Strategy', desc: 'What works in ecommerce does not work in legal. We build content strategies for your sector.' },
              { title: 'Conversion Paths', desc: 'B2B and B2C convert differently. We optimize for your industry specific conversion paths.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy-100 bg-white p-6 card-hover">
                <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
