import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Best SEO Company"
        description="The page you are looking for could not be found."
        canonical="/404"
        noindex
      />

      <section className="flex min-h-screen items-center justify-center bg-navy-800 px-4 pt-20">
        <div className="text-center">
          <div className="text-8xl font-bold gradient-text font-display sm:text-9xl">404</div>
          <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">Page Not Found</h1>
          <p className="mt-4 max-w-md text-base text-navy-300">
            The page you are looking for may have been moved, deleted, or never existed.
          </p>
          <Link to="/" className="btn-primary mt-8">
            <HomeIcon className="h-4 w-4" /> Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
