export default function HeroBanner() {
  return (
    <section className="relative h-[420px] bg-[var(--gov-navy)] text-white">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('/assets/india-hero.jpg')"
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="mb-4">
          <img
            src="/assets/ashoka.svg"
            alt="State Emblem of India"
            className="w-16 h-16 mb-2"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
          Aadhaar Service Intelligence Dashboard
        </h1>

        <p className="mt-2 text-lg text-slate-200 max-w-2xl">
          Unlocking operational insights from aggregated Aadhaar enrolment
          and update data
        </p>

        {/* Faux search (visual only) */}
        <div className="mt-6 bg-white rounded-md flex overflow-hidden max-w-2xl">
          <input
            disabled
            placeholder="Search analytics, states, trends…"
            className="flex-1 px-4 py-3 text-slate-700 outline-none"
          />
          <button className="bg-red-600 px-6 text-white font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}