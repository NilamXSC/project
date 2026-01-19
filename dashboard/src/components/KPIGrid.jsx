export default function KPIGrid({ aspiData }) {
  const totalStates = aspiData.length
  const highPressure = aspiData.filter(d => d.ASPI > 0.6).length
  const avgASPI = (
    aspiData.reduce((s, d) => s + d.ASPI, 0) / totalStates
  ).toFixed(2)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="bg-white p-5 border rounded">
        <p className="text-xs text-slate-500">States Analysed</p>
        <p className="text-2xl font-bold">{totalStates}</p>
      </div>

      <div className="bg-white p-5 border rounded">
        <p className="text-xs text-slate-500">High Pressure Regions</p>
        <p className="text-2xl font-bold text-red-600">{highPressure}</p>
      </div>

      <div className="bg-white p-5 border rounded">
        <p className="text-xs text-slate-500">Average ASPI</p>
        <p className="text-2xl font-bold">{avgASPI}</p>
      </div>

    </div>
  )
}