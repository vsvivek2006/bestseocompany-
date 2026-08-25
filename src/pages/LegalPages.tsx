import Seo from '@/components/Seo';
import { Container, Section, PageHeader } from '@/components/ui';
import { SITE } from '@/data/site';

interface LegalPageProps {
  title: string;
  description: string;
  canonical: string;
  sections: { heading: string; body: string[] }[];
}

function LegalPage({ title, description, canonical, sections }: LegalPageProps) {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: title, path: canonical },
  ];

  return (
    <>
      <Seo
        title={`${title} | Best SEO Company`}
        description={description}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="Legal"
        title={title}
        subtitle={description}
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-sm text-navy-400">
              Last updated: January 2026
            </div>
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl font-bold text-navy-800 sm:text-2xl">{section.heading}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((p, i) => (
                      <p key={i} className="text-base leading-relaxed text-navy-600">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-lg font-bold text-navy-800">Contact Us</h3>
              <p className="mt-2 text-sm text-navy-600">
                If you have any questions about this policy, please contact us:
              </p>
              <div className="mt-3 space-y-1 text-sm text-navy-600">
                <p>{SITE.name}</p>
                <p>{SITE.address.full}</p>
                <p>Phone: {SITE.phone}</p>
                <p>Email: {SITE.email}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Best SEO Company collects, uses, and protects your personal information."
      canonical="/privacy-policy"
      sections={[
        {
          heading: 'Information We Collect',
          body: [
            'We collect information you provide directly to us when you fill out our contact form, request a free SEO audit, or communicate with us. This may include your name, business name, website URL, phone number, email address, target location, and message.',
            'We also automatically collect certain technical information when you visit our website, such as IP address, browser type, device information, and pages visited. This information is used for analytics and website optimization.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          body: [
            'We use the information we collect to respond to your inquiries, provide SEO services, send important updates about our services, improve our website and services, and comply with legal obligations.',
            'We do not sell, rent, or trade your personal information to third parties. We may share your information with service providers who help us operate our business, but only under confidentiality agreements.',
          ],
        },
        {
          heading: 'Cookies and Tracking',
          body: [
            'Our website may use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand how visitors use our site. You can control cookies through your browser settings.',
            'We use analytics tools like Google Analytics to collect anonymized usage data. This helps us understand how visitors find and use our website so we can improve our content and services.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
            'We limit access to your personal information to authorized personnel who need it to provide our services or comply with legal obligations.',
          ],
        },
        {
          heading: 'Your Rights',
          body: [
            'You have the right to access, correct, or delete your personal information. You can also opt out of receiving marketing communications from us at any time by contacting us using the details below.',
            'If you have any concerns about how we handle your data, please contact us. We will respond to your request within a reasonable timeframe.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          body: [
            'We may update this Privacy Policy from time to time. We will post any changes on this page and update the "Last updated" date. We encourage you to review this policy periodically.',
          ],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms and conditions for using the Best SEO Company website and services."
      canonical="/terms-and-conditions"
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: [
            'By accessing and using the Best SEO Company website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.',
          ],
        },
        {
          heading: 'Services',
          body: [
            'Best SEO Company provides search engine optimization (SEO) services to businesses. The specific scope of services will be defined in individual service agreements or proposals.',
            'While we use industry best practices and data-driven strategies, we cannot guarantee specific search engine rankings, traffic levels, or business outcomes. Search engine algorithms are controlled by third parties and are subject to change without notice.',
          ],
        },
        {
          heading: 'No Guarantee of Rankings',
          body: [
            'SEO results depend on many factors outside our control, including search engine algorithm changes, competitor activity, and market conditions. We do not guarantee specific rankings, traffic, or leads. Any claims of guaranteed results should be reported to us immediately.',
          ],
        },
        {
          heading: 'Client Responsibilities',
          body: [
            'Clients are responsible for providing accurate information, timely access to website platforms, and necessary approvals for SEO work. Delays in providing access or approvals may affect project timelines and results.',
            'Clients must not engage in activities that could harm their SEO performance, including buying backlinks, keyword stuffing, or using black-hat SEO techniques, while we are providing services.',
          ],
        },
        {
          heading: 'Payment Terms',
          body: [
            'Payment terms are defined in individual service agreements. Unless otherwise specified, invoices are due within 15 days of issuance. Late payments may result in suspension of services.',
          ],
        },
        {
          heading: 'Intellectual Property',
          body: [
            'All content, tools, and materials on this website are the property of Best SEO Company or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            'Best SEO Company shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid by the client for services in the preceding three months.',
          ],
        },
        {
          heading: 'Changes to Terms',
          body: [
            'We may update these Terms and Conditions from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our website after changes constitutes acceptance of the new terms.',
          ],
        },
      ]}
    />
  );
}

export function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="Our refund policy for SEO services provided by Best SEO Company."
      canonical="/refund-policy"
      sections={[
        {
          heading: 'General Policy',
          body: [
            'Best SEO Company strives to deliver high-quality SEO services. We invest significant time and resources into each project, and our refund policy reflects the nature of SEO as a long-term, ongoing service.',
          ],
        },
        {
          heading: 'Monthly Retainer Services',
          body: [
            'Monthly SEO retainers can be cancelled at any time with 30 days written notice. We do not offer refunds for work already completed. If you cancel mid-month, you will be charged for the full month and services will continue until the end of the billing period.',
            'We do not offer refunds for months where work has already been performed. SEO is a cumulative process and results build over time.',
          ],
        },
        {
          heading: 'Project-Based Services',
          body: [
            'For project-based services (such as SEO audits), refunds are available if the project has not yet started. Once work has begun, refunds are calculated based on the percentage of work completed.',
            'If you are unsatisfied with a completed project, please contact us within 14 days of delivery to discuss your concerns. We will work with you to address any issues.',
          ],
        },
        {
          heading: 'Non-Refundable Items',
          body: [
            'The following are non-refundable: third-party tool subscriptions, paid links or sponsorships, content writing services already delivered, and any work already completed and delivered.',
          ],
        },
        {
          heading: 'How to Request a Refund',
          body: [
            'To request a refund, contact us using the details below. Please include your name, project details, and the reason for your refund request. We will respond within 5 business days.',
          ],
        },
      ]}
    />
  );
}

export function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      description="Important disclaimers regarding Best SEO Company website and services."
      canonical="/disclaimer"
      sections={[
        {
          heading: 'General Information',
          body: [
            'The information provided by Best SEO Company on this website is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on this site.',
          ],
        },
        {
          heading: 'No Guarantee of Results',
          body: [
            'SEO is an ongoing process influenced by many factors outside our control, including search engine algorithm changes, competitor actions, and market dynamics. We do not guarantee specific rankings, traffic, leads, or revenue outcomes from our SEO services.',
            'Any statements about potential results are estimates based on our experience and industry data, not guarantees of future performance.',
          ],
        },
        {
          heading: 'External Links',
          body: [
            'Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.',
          ],
        },
        {
          heading: 'Professional Advice',
          body: [
            'The information on this website is not professional advice. SEO strategies and recommendations should be evaluated in the context of your specific business situation. We recommend consulting with our team directly for advice tailored to your business.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            'Under no circumstances shall Best SEO Company or its parent company be liable for any loss or damage caused by the use of this website or reliance on any information provided. Your use of this website and our services is at your own risk.',
          ],
        },
      ]}
    />
  );
}
