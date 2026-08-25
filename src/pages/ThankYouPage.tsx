import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, ButtonLink, ButtonAnchor } from '@/components/ui';
import { SITE } from '@/data/site';

export default function ThankYouPage() {
  return (
    <>
      <Seo
        title="Thank You | Best SEO Company"
        description="Thank you for contacting Best SEO Company. Our team will get back to you within one business day."
        canonical="/thank-you"
        noindex
      />

      <Section className="pt-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-50 animate-fade-in-up">
              <CheckCircle2 className="h-10 w-10 text-success-500" />
            </div>
            <h1 className="mt-8 text-3xl font-bold text-navy-800 sm:text-4xl lg:text-5xl animate-fade-in-up">
              Thank You!
            </h1>
            <p className="mt-5 text-lg text-navy-600 animate-fade-in-up">
              Your message has been received. Our SEO team will review your request and get back to you within one business day with your free SEO audit.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up">
              <ButtonLink to="/" variant="primary">
                Back to Home <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonAnchor href={`tel:${SITE.phone}`} variant="outline">
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </ButtonAnchor>
              <ButtonAnchor href={SITE.whatsappLink} variant="ghost">
                <MessageCircle className="h-4 w-4 text-success-500" /> WhatsApp
              </ButtonAnchor>
            </div>

            <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-6 text-left">
              <h2 className="text-lg font-bold text-navy-800">What Happens Next?</h2>
              <div className="mt-4 space-y-3">
                {[
                  'Our team reviews your website and SEO requirements',
                  'We prepare a preliminary SEO audit covering technical, on-page, and content factors',
                  'We contact you within one business day with findings and recommendations',
                  'If you decide to work with us, we create a custom SEO strategy for your business',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="text-sm text-navy-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link to="/blog" className="text-sm font-semibold text-accent-600 hover:underline">
                Read our SEO blog while you wait
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
