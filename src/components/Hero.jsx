import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center md:pt-32">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-slate-200 backdrop-blur">
          Gaming deals across every platform
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
          Your ultimate hub for game prices, deals, and alerts
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Browse, compare, and track discounts from Steam, Epic, GOG, PlayStation, Xbox, and Nintendo—all in one place.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#demo" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-blue-400/30 transition hover:bg-blue-400">
            Try the live demo
          </a>
          <a href="#features" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/20 transition hover:bg-white/20">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
