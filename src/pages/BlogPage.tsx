import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, PageHeader, CTASection } from '@/components/ui';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/site';

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ];

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <Seo
        title="SEO Blog | SEO Tips, Guides & Best Practices | Best SEO Company"
        description="Expert SEO guides, tips, and best practices. Learn about technical SEO, local SEO, content SEO, ecommerce SEO, link building, and more from Best SEO Company."
        canonical="/blog"
        keywords="SEO blog, SEO tips, SEO guides, technical SEO checklist, local SEO guide, ecommerce SEO guide, SEO audit guide"
        breadcrumbs={breadcrumbs}
      />

      <PageHeader
        eyebrow="Blog"
        title="SEO Insights & Guides"
        subtitle="Practical SEO advice, how-to guides, and industry insights to help you improve your organic search performance."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <Container>
          {/* Categories */}
          <div className="mb-10 flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                  i === 0 ? 'bg-accent-500 text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                } transition-colors cursor-pointer`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          <Link
            to="/blog"
            className="group mb-12 grid gap-8 rounded-3xl border border-navy-100 bg-white p-6 card-hover lg:grid-cols-2 lg:p-8"
          >
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700">
              <div className="text-center">
                <div className="text-6xl font-bold text-white/10 font-display">SEO</div>
                <div className="-mt-4 text-sm font-semibold text-accent-300">Featured Article</div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-navy-400">
                <span className="inline-flex items-center gap-1 rounded-md bg-accent-50 px-2.5 py-1 font-semibold text-accent-600">
                  <Tag className="h-3 w-3" /> {featured.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {featured.readTime}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-base text-navy-600">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Post Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to="/blog"
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm card-hover"
              >
                <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/10 to-violet-500/10">
                  <div className="text-3xl font-bold text-navy-200 font-display">{post.category.charAt(0)}</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-navy-400">
                  <span className="inline-flex items-center gap-1 rounded-md bg-accent-50 px-2 py-0.5 font-semibold text-accent-600">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-navy-800">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-navy-500">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need Help Implementing These SEO Strategies?"
        subtitle="Our team can help you apply these SEO techniques to your business. Get a free SEO audit today."
      />
    </>
  );
}
