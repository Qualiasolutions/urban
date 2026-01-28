export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-navy-950/20 border-t-navy-950 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-navy-600 text-sm uppercase tracking-wider">Loading...</p>
      </div>
    </div>
  );
}
