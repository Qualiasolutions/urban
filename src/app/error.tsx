'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 border border-navy-950/20 flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-8 h-8 text-navy-950" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-950 mb-4">
          Something Went Wrong
        </h1>

        <p className="text-navy-600 mb-8 leading-relaxed">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-navy-950 text-cream-100 px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-navy-800 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-navy-950 text-navy-950 px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-navy-950 hover:text-cream-100 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
