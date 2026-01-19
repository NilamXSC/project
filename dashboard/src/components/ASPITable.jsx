import { useEffect, useState } from "react"

export default function ASPITable() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/aspi_statewise.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  // Sort by ASPI descending for ranking
  const sortedData = [...data].sort((a, b) => b.ASPI - a.ASPI)

  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-[#2c3e50] bg-[#fafafa]">
            <th className="px-6 py-3.5 text-left font-bold text-[#2c3e50] uppercase tracking-wide text-xs">
              Rank
            </th>
            <th className="px-6 py-3.5 text-left font-bold text-[#2c3e50] uppercase tracking-wide text-xs">
              State / Union Territory
            </th>
            <th className="px-6 py-3.5 text-right font-bold text-[#2c3e50] uppercase tracking-wide text-xs">
              ASPI Indicator
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr key={i} className={`border-b border-[#e5e5e5] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'} hover:bg-[#f5f5f5] transition-colors`}>
              <td className="px-6 py-3.5 text-[#2c3e50] tabular-nums font-semibold">
                {i + 1}
              </td>
              <td className="px-6 py-3.5 text-[#2c3e50] font-normal">
                {row.state}
              </td>
              <td className="px-6 py-3.5 text-right text-[#2c3e50] tabular-nums font-bold">
                {Number(row.ASPI).toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}