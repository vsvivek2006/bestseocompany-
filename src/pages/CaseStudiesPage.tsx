import { TrendingUp, Search, Link2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, ButtonLink, PageHeader, CTASection } from '@/components/ui';
import { CASE_STUDIES } from '@/data/site';

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
  ];

  return (
    <>
      <Seo
        title="SEO Case Studies | Real Results | Best SEO Company"
        description="See how our data-driven SEO strategies have helped businesses grow organic traffic, keyword visibility, and qualified leads. Real SEO case studies with transparent results."
        canonical="/case-studies"
        keywords="SEO case studies, SEO results, organic traffic growth, keyword visibility, SEO ROI"
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="Case Studies"
        title="Real SEO Results, Transparent Reporting"
        subtitle="See how our data-driven SEO strategies have helped businesses grow organic traffic, keyword visibility, and qualified leads. We only publish real data — never fabricated results."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          <div className="space-y-12">
            {CASE_STUDIES.map((cs, i) => (
              <div
                key={cs.slug}
                className={`grid items-center gap-10 rounded-3xl border border-navy-100 bg-white p-8 lg:grid-cols-2 lg:p-10 ${
                  i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                {/* Content */}
                <div>
                  <div className="inline-flex rounded-lg bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                    {cs.industry}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">{cs.title}</h2>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-navy-700">The Challenge</h3>
                      <p className="mt-1 text-sm text-navy-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-700">Initial Situation</h3>
                      <p className="mt-1 text-sm text-navy-600">{cs.initial}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-700">Our Strategy</h3>
                      <p className="mt-1 text-sm text-navy-600">{cs.strategy}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-bold text-navy-700">Technical Improvements</h3>
                    <div className="mt-2 space-y-1.5">
                      {cs.technical.map((t) => (
                        <div key={t} className="flex items-start gap-2 text-sm text-navy-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success-500" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-bold text-navy-700">Content Strategy</h3>
                      <p className="mt-1 text-sm text-navy-600">{cs.content}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-700">Authority Strategy</h3>
                      <p className="mt-1 text-sm text-navy-600">{cs.authority}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="rounded-2xl bg-navy-800 p-8 text-white">
                  <h3 className="text-lg font-bold text-white">Results</h3>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-3xl font-bold gradient-text">{r.value}</div>
                        <div className="mt-1 text-sm text-navy-300">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2 rounded-xl bg-white/5 p-4 text-sm text-navy-200">
                    <TrendingUp className="h-5 w-5 flex-shrink-0 text-success-500" />
                    Results achieved over 6-12 months of sustained SEO effort.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want Results Like These for Your Business?"
        subtitle="Get a free SEO audit and discover how we can help you achieve similar growth in organic traffic and leads."
      />
    </>
  );
}
