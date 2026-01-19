export default function GovHeader() {
  return (
    <header className="bg-white border-b border-[#d1d5db]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">

        {/* Emblem */}
        <img
          src="/assets/ashoka.svg"
          alt="State Emblem of India"
          className="w-10 h-10 mr-4"
        />

        {/* Title Block */}
        <div className="leading-tight">
          <h1 className="text-lg font-semibold text-[#0f172a] tracking-tight">
            Aadhaar Service Intelligence Dashboard
          </h1>
          <p className="text-xs text-[#475569] mt-[2px]">
            Internal analytical dashboard for aggregated Aadhaar operational data
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6 h-8 w-px bg-[#e5e7eb]" />

        {/* Authority Block */}
        <div className="text-xs text-[#475569] leading-snug">
          <div className="font-medium text-[#0f172a]">
            Government of India
          </div>
          <div>
            Beta • Non-personal, Aggregated Data
          </div>
        </div>

      </div>
    </header>
  )
}