export default function KPIStatStrip({ aspiData }) {
  const totalStates = aspiData.length
  const highPressure = aspiData.filter(d => d.ASPI > 0.6).length
  const avgASPI = (
    aspiData.reduce((s, d) => s + d.ASPI, 0) / totalStates
  ).toFixed(2)

  return (
    <section className="bg-white border-b-2 border-[#1e3a8a]">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* States Analysed */}
          <div>
            <div className="text-4xl font-bold text-[#0f172a] mb-2 tabular-nums">
              {totalStates}
            </div>
            <div className="text-sm text-[#475569] font-medium tracking-wide">
              States / Union Territories Analysed
            </div>
          </div>

          {/* High Pressure Regions */}
          <div>
            <div className="text-4xl font-bold text-[#0f172a] mb-2 tabular-nums">
              {highPressure}
            </div>
            <div className="text-sm text-[#475569] font-medium tracking-wide">
              High Pressure Regions Observed
            </div>
          </div>

          {/* Average ASPI */}
          <div>
            <div className="text-4xl font-bold text-[#0f172a] mb-2 tabular-nums">
              {avgASPI}
            </div>
            <div className="text-sm text-[#475569] font-medium tracking-wide">
              Average ASPI Composite Indicator
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}