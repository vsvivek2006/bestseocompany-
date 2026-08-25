import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section className={`section-pad ${dark ? 'bg-navy-800 text-white' : ''} ${className}`}>
      {children}
    </section>
  );
}

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  external?: boolean;
}

export function ButtonLink({ to, children, variant = 'primary', className = '', external = false }: ButtonLinkProps) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant];

  if (external) {
    return (
      <a href={to} className={`${variantClass} ${className}`} target={to.startsWith('http') ? '_blank' : undefined} rel={to.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={`${variantClass} ${className}`}>
      {children}
    </Link>
  );
}

interface ButtonAnchorProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export function ButtonAnchor({ href, children, variant = 'primary', className = '' }: ButtonAnchorProps) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant];

  return (
    <a href={href} className={`${variantClass} ${className}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-sm ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, dark = false, center = true }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && (
        <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title mt-4 ${dark ? 'text-white' : 'text-navy-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${dark ? 'text-navy-200' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <>
                <Link to={item.path} className="hover:text-accent-600 transition-colors">
                  {item.name}
                </Link>
                <span className="text-navy-300">/</span>
              </>
            ) : (
              <span className="font-semibold text-navy-700" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: { name: string; path: string }[];
}

export function PageHeader({ title, subtitle, eyebrow, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-800 pb-16 pt-32 text-white">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="container-x relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && <span className="eyebrow-dark">{eyebrow}</span>}
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-navy-200 sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryLink?: string;
}

export function CTASection({
  title = 'Ready to Grow Your Organic Search Traffic?',
  subtitle = 'Get a free SEO audit and discover exactly what is holding back your rankings — and how to fix it.',
  primaryCta = 'Get Free SEO Audit',
  primaryLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy-800 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-lg text-navy-200">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink to={primaryLink} variant="primary">
                {primaryCta}
              </ButtonLink>
              <a href={`tel:${SITE.phone}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
