import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 border border-navy-950/20 flex items-center justify-center mx-auto mb-8">
          <Search className="w-8 h-8 text-navy-950" />
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-bold text-navy-950 mb-4">
          404
        </h1>

        <h2 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
          Page Not Found
        </h2>

        <p className="text-navy-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find your way back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-navy-950 text-cream-100 px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-navy-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-navy-950 text-navy-950 px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-navy-950 hover:text-cream-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
